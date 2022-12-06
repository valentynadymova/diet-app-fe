import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Container } from '../../components/container';
import { BgImageStyled } from './MainPage.styled';
import { DailyCaloriesForm } from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import { DailyCalorieIntake } from '../../components/DailyCalorieIntake/DailyCalorieIntake';
import Modal from '../../components/modal/Modal';
import AppLoader from '../../components/Loader/Loader';

export const MainPage = () => {
  const [modalData, setModalData] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(prevValue => !prevValue);
  };

  const toggleLoader = () => {
    setIsLoading(prevValue => !prevValue);
  };

  const onFormSubmit = async data => {
    toggleLoader();
    try {
      const response = await axios({
        method: 'post',
        url: `products/public/${data.bloodType}`,
        data,
      });
      setModalData(response.data);
      toggleLoader();
      toggleModal();
    } catch (error) {
      console.log(error);
      toast.error('Щось пішло не так');
      toggleLoader();
    }
  };

  return (
    <main>
      <BgImageStyled />
      <Container>
        <DailyCaloriesForm onFormSubmit={onFormSubmit} />
        {isOpenModal && (
          <Modal onClose={toggleModal}>
            <DailyCalorieIntake data={modalData} onClose={toggleModal} />
          </Modal>
        )}
      </Container>
      {isLoading && <AppLoader />}
    </main>
  );
};
