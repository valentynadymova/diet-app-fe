import { GoCalendar } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import DatePicker, { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import { useDebounce } from 'use-debounce';
import 'react-datepicker/dist/react-datepicker.css';
import { fetchProductSearch } from '../../services/fetchProductSeach';
import {
  useFetchUserDayInfoQuery,
  useAddProductMutation,
} from '../../redux/rtkSliceForDiaryPage/userDayInfoSlice';
import { useWindowWidth } from '@react-hook/window-size';
import { BsPlusLg } from 'react-icons/bs';
import { UserMenu } from '../../components/userMenu';
import SideBar from '../../components/SideBar/SideBar';
import {
  Wrapper,
  CalendarStyles,
  ButtonOpenModalForm,
  DivUserMenu,
  Parag,
} from './DiaryPage.styled';
import { DiaryAddProductForm } from '../../components/diaryAddProductForm';
import { DiaryProductsList } from '../../components/diaryProductsList/DiaryProductsList';
import { ModalForDiaryPage } from '../../components/modalForDiaryPage/modalForDiaryPage';
import { Container } from '../../components/container/Container';
import AppLoader from '../../components/Loader/Loader';
import { authSelectors } from '../../redux/authorization';

export const DiaryPage = () => {
  const [date, setDate] = useState(new Date());
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [productName, setProductName] = useState('');
  const [debouncedProductName] = useDebounce(productName, 600);
  const [productWeight, setProductWeight] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [debouncedErrorMsg] = useDebounce(errorMsg, 1000);
  const [isSearchingProduct, setIsSearchingProduct] = useState(false);
  const [productsVariants, setProductsVariants] = useState([]);

  const { data: products, isFetching } = useFetchUserDayInfoQuery(
    format(date, 'yyyy-MM-dd'),
    {
      refetchOnMountOrArgChange: true,
    },
  );

  const [createProduct, { isLoading }] = useAddProductMutation();

  const eatenProductsList = products?.data?.result;

  const calories = useSelector(authSelectors.getUserDataCalories);

  const totalConsumed = eatenProductsList?.reduce((total, product) => {
    return total + product.productCalories;
  }, 0);

  const windowWidth = useWindowWidth();
  registerLocale('uk', uk); // для укр мови в календарі

  const isAlreadyInProdVariants = productsVariants.some(
    prod => prod.title.ua === debouncedProductName,
  );

  const isCurrentDay =
    format(date, 'dd/MM/yyyy') === format(new Date(), 'dd/MM/yyyy');

  const toggleModal = () => {
    setIsOpenModal(prevValue => !prevValue);
  };

  useEffect(() => {
    setErrorMsg('');
    if (!debouncedProductName) {
      return;
    }
    if (isAlreadyInProdVariants) {
      return;
    }
    setIsSearchingProduct(true);
    fetchProductSearch(debouncedProductName).then(searchData => {
      typeof searchData === 'string'
        ? setErrorMsg(searchData)
        : setProductsVariants(searchData);
      setIsSearchingProduct(false);
    });
  }, [isAlreadyInProdVariants, debouncedProductName]);

  useEffect(() => {
    debouncedErrorMsg && toast.error(debouncedErrorMsg);
    setErrorMsg('');
  }, [debouncedErrorMsg]);

  const handleChange = ({ name, value }) => {
    if ((name === 'productWeight' && value > 99999) || value === '0') {
      setErrorMsg('Вага не може бути 0 грам');
      return;
    }
    name === 'productName' && setProductName(value);
    name === 'productWeight' && setProductWeight(value);
  };

  const handleSubmit = () => {
    const dateIsFormatting = format(date, 'yyyy-MM-dd');
    const sendObj = {
      date: dateIsFormatting,
      productTitle: productName,
      productWeight,
    };

    const isExistContact = productsVariants.find(
      product =>
        product.title.ua.toLocaleLowerCase() ===
        productName.toLocaleLowerCase(),
    );

    if (!isExistContact) {
      toast('Невірне введення. Такого продукту немає в базі.', {
        duration: 2000,
      });
      setProductName('');
      setProductWeight('');
      return;
    } else {
      createProduct(sendObj);
      setProductName('');
      setProductWeight('');
      isOpenModal && toggleModal();
      toast.success('Ви успішно додали продукт!');
      calories !== '0' &&
        calories <= totalConsumed &&
        toast('Ви уже спожили добову норму продуктів за цей день!', {
          icon: '👏',
        });
    }
  };

  return (
    <main>
      {(isLoading || isFetching) && <AppLoader />}

      {windowWidth < 768 && (
        <DivUserMenu>
          <Container>
            <UserMenu />
          </Container>
        </DivUserMenu>
      )}
      <Wrapper>
        <Container>
          <CalendarStyles>
            <DatePicker
              locale="uk"
              dateFormat="dd.MM.yyyy"
              selected={date}
              onChange={setDate}
              maxDate={new Date()}
              className={'calendar'}
            />
            <GoCalendar size={20} fill={'#9B9FAA'} className="calendar_icon" />
          </CalendarStyles>
        </Container>

        <Container>
          {calories === '0' && (
            <Parag>
              Розрахуйте свою добову норму калорій на сторінці калькулятора.
            </Parag>
          )}
          {calories !== '0' && calories <= totalConsumed && (
            <Parag>Ви спожили добову норму продуктів за цей день!!!</Parag>
          )}
          {isCurrentDay && windowWidth > 767 && (
            <DiaryAddProductForm
              productName={productName}
              productWeight={productWeight}
              productsVariants={productsVariants}
              isSearchingProduct={isSearchingProduct}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}

          {products?.data?.result.length !== 0 ? (
            <DiaryProductsList
              isCurrentDay={isCurrentDay}
              eatenProductsList={eatenProductsList}
            />
          ) : (
            <Parag>Дані за цей день відсутні!</Parag>
          )}

          {!isCurrentDay && (
            <Parag>Ви не можете змінювати свій раціон за цей день!</Parag>
          )}
        </Container>

        {isCurrentDay && windowWidth < 768 && (
          <ButtonOpenModalForm type="button" onClick={toggleModal}>
            <BsPlusLg size={14} />
          </ButtonOpenModalForm>
        )}

        {windowWidth < 768 && isOpenModal && (
          <ModalForDiaryPage onClose={toggleModal}>
            <DiaryAddProductForm
              productName={productName}
              productWeight={productWeight}
              productsVariants={productsVariants}
              isSearchingProduct={isSearchingProduct}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </ModalForDiaryPage>
        )}

        <SideBar date={format(date, 'dd/MM/yyyy')} consumed={totalConsumed} />
      </Wrapper>
    </main>
  );
};
