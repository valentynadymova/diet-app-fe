import React from 'react';

import { createPortal } from 'react-dom';
import { Overlay, ModalContent } from './burger.styled';

const modalRoot = document.querySelector('#modal-root');

export const Burger = ({ children }) => {
  return createPortal(
    <Overlay>
      <ModalContent>{children}</ModalContent>
    </Overlay>,
    modalRoot,
  );
};
