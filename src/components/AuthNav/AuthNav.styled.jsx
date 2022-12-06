import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Contain = styled.div`
  @media (max-width: 767px) {
    margin-top: 20px;
    display: inline;

    width: auto;
  }
  @media (min-width: 1280px) {
    margin-top: 40px;
  }
`;

export const Sign = styled(NavLink)`
  @media (max-width: 767px) {
    width: 60px;
  }
  @media (max-width: 1279px) {
    margin-left: auto;
  }
  @media (min-width: 1280px) {
    margin-left: 20px;
    padding-left: 20px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-left: 2px solid ${({ theme: { colors } }) => colors.borderColor};
  }
  &.active {
    color: #212121;

    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  color: #9b9faa;
  text-decoration: none;
  text-align: right;
`;

export const Link = styled(NavLink)`
  @media (max-width: 767px) {
    width: 117px;
    height: 12px;
  }
  @media (max-width: 1279px) {
    margin-left: 16px;
  }
  @media (min-width: 1280px) {
    margin-left: 16px;
  }
  &.active {
    color: #212121;

    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  color: #9b9faa;
  text-decoration: none;
  padding-top: 20px;
`;

export const Cont = styled.div`
  @media (max-width: 1279px) {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;

    width: auto;
  }
  @media (min-width: 1280px) {
  }
`;

export const Diary = styled(NavLink)`
  @media (max-width: 1279px) {
    width: 100%;
  }

  @media (min-width: 1280px) {
    margin-left: 20px;
    padding-left: 20px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-left: 2px solid ${({ theme: { colors } }) => colors.borderColor};
  }
  &.active {
    color: #212121;

    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  color: #9b9faa;
  text-decoration: none;
  text-align: right;
`;

export const Calc = styled(NavLink)`
  @media (max-width: 1279px) {
    width: 117px;
    height: 12px;
  }

  @media (min-width: 1280px) {
    margin-left: 16px;
  }
  &.active {
    color: #212121;

    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  color: #9b9faa;
  text-decoration: none;
  padding-top: 20px;
`;
