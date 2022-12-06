import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  @media (max-width: 1279px) {
    border-bottom: #e0e0e0 solid 1px;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 1279px) {
    height: 80px;
    padding: 37px 5px;
  }
  @media (min-width: 1280px) {
    padding: 80px;
    padding-left: 16px;
  }
  display: flex;
`;

export const Logo = styled(NavLink)`
  @media (max-width: 1279px) {
    margin-left: 32px;
  }
`;

export const Link = styled(NavLink)`
  @media (max-width: 1279px) {
    margin-left: 16px;
  }
  @media (min-width: 1280px) {
    margin-left: 16px;
  }
  color: #9b9faa;
  text-decoration: none;
  &.active {
    color: red;

    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  :hover {
    color: blue;
  }
`;
export const Sign = styled(NavLink)`
  @media (max-width: 1279px) {
    margin-left: auto;
  }
  @media (min-width: 1280px) {
    margin-left: 20px;
    padding-left: 20px;
    border-left: #9b9faa solid 2px;
  }

  color: #212121;
  text-decoration: none;
  padding-top: 20px;
  text-align: right;
  &.active {
    color: red;

    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  :hover {
    color: blue;
  }
`;
