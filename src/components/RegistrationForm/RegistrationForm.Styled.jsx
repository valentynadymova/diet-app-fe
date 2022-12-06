import styled from 'styled-components';

export const Section = styled.section`
  width: 280px;
  margin: 0 auto;
  padding: 40px 0px;

  font-family: ${prop => prop.theme.fonts.$verdana};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 160px 0px;
    width: 400px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 10px;
  }

  .form-title {
    font-family: ${({ theme: { fonts } }) => fonts.$gothamPro};
    font-weight: 700;
    font-style: normal;
    font-size: 14px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.gothamProHeight};
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme: { colors } }) => colors.$orange};
    margin-bottom: 60px;

    @media screen and (min-width: 768px) {
      text-align: start;
    }
  }

  .form {
    width: 100%;
  }

  .form-input {
    width: 100%;
    height: 36px;
    padding-bottom: 20px;
    padding-left: 0px;

    border: none;
    border-bottom: 1px solid #e0e0e0;
    outline: none;
    background: transparent;

    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.21;
    letter-spacing: 0.04em;
    color: ${prop => prop.theme.colors.$grey};

    &:not(:first-child) {
      margin-top: 40px;
    }

    &:focus {
      border-color: ${prop => prop.theme.colors.$orange};
      color: ${prop => prop.theme.colors.$orange};
    }

    &::placeholder {
      color: ${prop => prop.theme.colors.$grey};
    }

    @media screen and (min-width: 768px) {
      width: 240px;
    }
  }

  .form-input-error {
    width: 280px;
    color: red;
    font-size: 12px;

    @media screen and (min-width: 768px) {
      width: 240px;
    }
  }

  .buttons {
    margin-top: 60px;
    width: 100%;
    height: 108px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) {
      height: 44px;
      flex-direction: row;
    }

    .login-button {
      width: 182px;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;

      font-family: ${({ theme: { fonts } }) => fonts.verdana};
      font-weight: 700;
      font-size: 14px;
      line-height: ${({ theme: { lineHeight } }) => lineHeight.verdana};
      align-items: center;
      text-align: center;
      letter-spacing: 0.04em;
      background: ${({ theme: { colors } }) => colors.$white};
      color: ${({ theme: { colors } }) => colors.$orange};
      box-shadow: ${({ theme: { options } }) => options.buttonShadow};
      border: 2px solid #fc842d;
      border-radius: ${({ theme: { options } }) => options.radius};
      cursor: pointer;
      align-self: center;
      transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
        border 0.5s cubic-bezier(0.4, 0, 0.2, 1),
        background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        background: #ff6b08;
        border-radius: #ff6b08;
        color: ${prop => prop.theme.colors.$white};
        box-shadow: 0 8px 43px rgb(255 107 1 / 60%);
      }
    }

    .register-button {
      width: 182px;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;

      font-family: ${({ theme: { fonts } }) => fonts.verdana};
      font-weight: 700;
      font-size: 14px;
      line-height: ${({ theme: { lineHeight } }) => lineHeight.verdana};
      letter-spacing: 0.04em;
      background: ${({ theme: { colors } }) => colors.$orange};
      color: ${({ theme: { colors } }) => colors.$white};
      box-shadow: ${({ theme: { options } }) => options.buttonShadow};
      border: 2px solid #fc842d;
      border-radius: ${({ theme: { options } }) => options.radius};
      cursor: pointer;
      align-self: center;
      transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
        border 0.5s cubic-bezier(0.4, 0, 0.2, 1),
        background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        background: #ff6b08;
        border-radius: #ff6b08;
        color: ${prop => prop.theme.colors.$white};
        box-shadow: 0 8px 43px rgb(255 107 1 / 60%);
      }
    }
  }
`;
