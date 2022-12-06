import styled from 'styled-components';

export const ProductFormStyled = styled.form`
  text-align: center;

  @media screen and (min-width: 768px) {
    display: flex;
  }

  .productForm-form__input {
    margin-left: auto;
    margin-right: auto;
    display: block;
    border: none;
    border-bottom: 2px solid ${prop => prop.theme.colors.borderColor};
    font-family: ${({ theme: { fonts } }) => fonts.verdana};
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    width: 280px;
    ::placeholder {
      color: ${prop => prop.theme.colors.$grey};
    }
    margin-bottom: 32px;
    padding-bottom: 8px;
    outline: none;

    @media screen and (min-width: 768px) {
      width: 325px;
      display: inline-block;
      margin-right: 22px;
      margin-bottom: 0;
      padding-bottom: 20px;
    }
  }

  .productForm-form__input--width {
    @media screen and (min-width: 768px) {
      width: 106px;
      display: inline-block;
      text-align: right;
    }
  }

  div {
    margin-bottom: 60px;
    @media screen and (min-width: 768px) {
      margin-right: 87px;
    }
    @media screen and (min-width: 1280px) {
      margin-right: 60px;
    }
  }
`;

export const ButtonAdd = styled.button`
  width: 176px;
  height: 48px;
  border-radius: 24px;
  line-height: 0;
  background: transparent;
  color: ${prop =>
    prop.disabled ? prop.theme.colors.$grey : prop.theme.colors.$orange};
  border: ${prop =>
    prop.disabled
      ? `3px solid${prop.theme.colors.$grey}`
      : `3px solid${prop.theme.colors.$orange}`};

  padding: 0;
  cursor: pointer;

  :hover {
    background: ${prop => !prop.disabled && prop.theme.colors.$orange};
    color: ${prop => !prop.disabled && prop.theme.colors.$white};
  }
  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`;
