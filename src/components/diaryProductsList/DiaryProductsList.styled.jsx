import styled from 'styled-components';

export const Div = styled.div`
  max-width: 300px;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 15px;
  @media screen and (max-width: 767px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 740px;
  }
`;

export const DiaryProductsListStyled = styled.table`
  margin-top: 31px;
  margin-bottom: 60px;
  border-collapse: separate;
  border-spacing: 32px;
  margin-left: -32px;
  margin-top: -32px;

  @media screen and (max-width: 767px) {
    border-spacing: 5px;
    margin-left: -5px;
    margin-top: -5px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    margin-bottom: 40px;
    width: 780px;
  }
`;
