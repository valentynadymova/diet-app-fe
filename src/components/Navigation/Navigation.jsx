import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { useSelector } from 'react-redux';
import { Logo, Con, LogoImage } from './Navigation.styled';
import { authSelectors } from '../../redux/authorization';
import LogoDesktop from '../../images/logoDesktop.svg';
import LogoTablet from '../../images/logoTablet.svg';
import LogoMobile from '../../images/logoMobile.svg';

const Navigation = () => {
  const windowWidth = useWindowWidth();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Con>
      <Logo to="/">
        {windowWidth >= 1280 && (
          <LogoImage src={LogoDesktop} alt="Logo" width={167} height={66} />
        )}
        {windowWidth < 1280 && windowWidth > 767 && (
          <LogoImage src={LogoTablet} alt="Logo" width={167} height={66} />
        )}
        {isLoggedIn ? (
          <>
            {windowWidth <= 767 && (
              <img src={LogoTablet} alt="Logo" width={167} height={66} />
            )}
          </>
        ) : (
          <>
            {windowWidth <= 767 && (
              <LogoImage src={LogoMobile} alt="Logo" width={167} height={66} />
            )}
          </>
        )}
      </Logo>
    </Con>
  );
};

export default Navigation;
