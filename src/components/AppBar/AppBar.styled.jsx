import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;

  position: relative;

  @media (max-width: 1279px) {
    border-bottom: 2px solid #9b9faa;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1279px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media (min-width: 1280px) {
    padding-top: 80px;
    padding-bottom: 150px;
  }

  width: 100%;
`;

export const DesktopBlock = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    margin-top: 40px;
  }
`;

export const UserCost = styled.div`
  margin-left: 600px;
`;
