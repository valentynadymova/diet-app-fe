import React from 'react';

import { ProductFormStyled, ButtonAdd } from './DiaryAddProductForm.styled';

import { useWindowWidth } from '@react-hook/window-size';
import { BsPlusLg } from 'react-icons/bs';
import AppLoader from '../Loader/Loader';

export const DiaryAddProductForm = ({
  productName,
  productWeight,
  productsVariants,
  isSearchingProduct,
  handleChange,
  handleSubmit,
}) => {
  const windowWidth = useWindowWidth();

  const onChange = e => {
    const { name, value } = e.target;
    handleChange({ name, value });
  };

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <ProductFormStyled className="productForm-form" onSubmit={onSubmit}>
      <div>
        <input
          name="productName"
          type="text"
          list="productSearch"
          placeholder="Введіть назву продукту"
          className="productForm-form__input"
          value={productName}
          onChange={onChange}
          autoComplete="off"
        />

        <input
          autoComplete="off"
          name="productWeight"
          type="text"
          pattern="[0-9]{1,4}"
          placeholder="Грами"
          title="Значення ваги товару повинно бути від 0 до 9999г"
          className="productForm-form__input productForm-form__input--width"
          value={productWeight}
          onChange={onChange}
        />
      </div>

      <ButtonAdd type="submit" disabled={!productName || !productWeight}>
        {windowWidth < 768 ? 'Додати' : <BsPlusLg size={14} />}
      </ButtonAdd>

      {isSearchingProduct && <AppLoader />}

      <datalist className="datalist" id="productSearch">
        {productsVariants &&
          productsVariants.map(product => (
            <option value={product.title.ua} key={product._id} />
          ))}
      </datalist>
    </ProductFormStyled>
  );
};
