import { useEffect } from 'react';
import { UserMenu } from '../userMenu';
import { Overlay, ModalStyle, Div } from './modalForDiaryPage.styled';
import { TbArrowBack } from 'react-icons/tb';
export const ModalForDiaryPage = ({ onClose, children }) => {
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <Overlay onClick={handleBackdropClick}>
      <Div>
        <TbArrowBack size={25} className="svg" onClick={onClose} />
        <UserMenu />
      </Div>

      <ModalStyle>{children}</ModalStyle>
    </Overlay>
  );
};
