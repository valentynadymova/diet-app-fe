import React from 'react';
import ReactDom from 'react-dom';
import { useEffect } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import arrowIcon from './arrow.svg';
import {
  StyledOverlay,
  StyledModal,
  StyledCloseButton,
  StyledCloseMobileButton,
  CloseMobileButtonContainer,
} from './Modal.styled';

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    if (window.matchMedia('(max-width: 767px)').matches) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('click', handleButtonClick);
      const body = document.querySelector('body');
      body.style.overflow = 'auto';
    };
  });

  const handleEscape = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleButtonClick = event => {
    if (event.currentTarget.tagName === 'BUTTON') {
      onClose();
    }
  };

  return ReactDom.createPortal(
    <StyledOverlay onClick={handleBackdropClick}>
      <StyledModal>
        <StyledCloseButton onClick={handleButtonClick}>
          <RiCloseFill size={20} />
        </StyledCloseButton>

        <StyledCloseMobileButton onClick={handleButtonClick}>
          <CloseMobileButtonContainer>
            <img src={arrowIcon} alt="arrow" />
          </CloseMobileButtonContainer>
        </StyledCloseMobileButton>

        {children}
      </StyledModal>
    </StyledOverlay>,
    document.getElementById('modal-root'),
  );
};

export default Modal;
