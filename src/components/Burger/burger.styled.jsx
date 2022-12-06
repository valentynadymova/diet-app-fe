import styled from 'styled-components';

export const Overlay = styled.div`
  @media (min-width: 320px) {
    position: fixed;
    top: 85px;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10000;

    background-color: #264061;
  }
  @media (min-width: 767px) {
    top: 110px;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  padding: 12px;
  color: white;
`;

export const Button = styled.button`
  width: 20px;
  height: 15px;
  margin-top: 15px;
  margin-left: 53px;
  margin-right: 20px;
  background-color: #fff;
  border: 0px;

  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;
