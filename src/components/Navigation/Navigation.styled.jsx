import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Con = styled.nav`
  @media (max-width: 767px) {
    width: 47px;
    height: 44px;
  }
  @media (max-width: 1279px) {
    margin-right: auto;
  }
`;

export const Logo = styled(NavLink)`
  max-width: 100%;
  @media (max-width: 767px) {
    height: 44px;
  }
  @media (max-width: 1279px) {
    margin-right: 40px;
  }
`;
export const LogoImage = styled.img`
  max-width: 100%;
`;
