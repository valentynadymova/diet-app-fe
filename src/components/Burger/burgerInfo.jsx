import React from 'react';
import { useState, useEffect } from 'react';
import { Burger } from './burger';
import { Button } from './burger.styled';
import { useWindowWidth } from '@react-hook/window-size';
import AuthNavLogined from '../AuthNav/AuthNavLogined';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

export const BurgerInfo = () => {
  const windowWidth = useWindowWidth();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [showModal]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Button type="button" onClick={toggleModal}>
        {showModal ? <AiOutlineClose /> : <AiOutlineMenu />}
      </Button>
      {showModal && (
        <Burger>
          {windowWidth < 1280 && <AuthNavLogined onClick={toggleModal} />}
        </Burger>
      )}
    </>
  );
};
