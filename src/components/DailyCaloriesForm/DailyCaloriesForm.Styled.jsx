import styled from 'styled-components';

export const Section = styled.section`
  width: 280px;
  padding-top: 32px;

  @media screen and (min-width: 768px) {
    width: 512px;
    padding-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 0px;
  }

  .form-label {
    width: 100%;
    margin-bottom: 8px;

    font-family: ${prop => prop.theme.fonts.$verdana};
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.44;
    color: ${prop => prop.theme.colors.$black};

    @media screen and (min-width: 768px) {
      font-size: 34px;
      line-height: 1.2;
      margin-bottom: 28px;
    }
  }

  form {
    width: 100%;

    .form {
      @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
      }
    }

    .form-part {
      @media screen and (min-width: 768px) {
        width: 240px;
      }
    }

    .form-input {
      width: 100%;
      height: 24px;
      margin-top: 32px;
      padding-bottom: 8px;
      padding-left: 0px;

      border: none;
      border-bottom: 1px solid #e0e0e0;
      outline: none;
      background: transparent;

      font-family: ${prop => prop.theme.fonts.$verdana};
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 1.21;
      letter-spacing: 0.04em;
      color: ${prop => prop.theme.colors.$grey};

      &:focus {
        border-color: ${prop => prop.theme.colors.$orange};
        color: ${prop => prop.theme.colors.$orange};
      }

      &::placeholder {
        color: ${prop => prop.theme.colors.$grey};
      }

      @media screen and (min-width: 768px) {
        margin-top: 40px;
        padding-bottom: 20px;
        height: 36px;
      }
    }

    .form-input-error {
      width: 240px;
      color: red;
      font-size: 12px;
    }

    .radio-buttons-title {
      margin-top: 32px;
      margin-bottom: 8px;
      font-family: ${prop => prop.theme.fonts.$verdana};
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 1.21;
      letter-spacing: 0.04em;
      color: ${prop => prop.theme.colors.$grey};

      @media screen and (min-width: 768px) {
        padding-bottom: 14px;
        margin-top: 40px;
        padding-top: 3.5px;
        border-bottom: 1px solid #e0e0e0;
      }
    }

    .radio-buttons {
      display: flex;
      justify-content: space-between;
    }

    .radio-buttons-label {
      font-family: ${prop => prop.theme.fonts.$verdana};
      font-style: normal;
      font-size: 14px;
      line-height: 1.21;
      letter-spacing: 0.04em;

      width: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:hover {
        color: ${prop => prop.theme.colors.$orange} !important;
        cursor: pointer;
      }
    }

    .radio-buttons-input {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border: 1px solid ${prop => prop.theme.colors.$grey};
      border-radius: 50%;
      outline: none;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;

      &:checked {
        border-color: ${prop => prop.theme.colors.$grey};
      }

      &:hover {
        border: 1px solid ${prop => prop.theme.colors.$orange};
      }

      &:before {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }

      &:checked:before {
        background: ${prop => prop.theme.colors.$orange};
      }
    }

    .button {
      width: 100%;
      margin-top: 40px;
      display: flex;
      justify-content: center;

      @media screen and (min-width: 768px) {
        justify-content: flex-start;
        margin-top: 60px;
      }

      @media screen and (min-width: 1280px) {
        justify-content: flex-end;
      }
    }
  }
`;
