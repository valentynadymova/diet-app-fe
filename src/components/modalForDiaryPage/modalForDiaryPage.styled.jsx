import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #eff1f3;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  max-width: 480px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 86px;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: transparent;

  z-index: 5500;
`;

export const ModalStyle = styled.div`
  background-color: ${props => props.theme.colors.$white};
  position: relative;
  height: 100vh;
  padding-top: 80px;
`;
