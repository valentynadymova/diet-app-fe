import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  padding: 40px 0px;

  @media screen and (min-width: 768px) {
    padding: 50px 0px 50px 0px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: ${prop => prop.theme.fonts.$verdana};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.44;
  color: ${prop => prop.theme.colors.$black};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }

  .daily-calorie-title {
    max-width: 330px;

    @media screen and (min-width: 768px) {
      max-width: 500px;
      text-align: center;
    }
  }

  .daily-calorie-box {
    width: 280px;
    height: 134px;
    border-bottom: 1px solid #e0e0e0;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
      width: 330px;
      height: 114px;
    }

    p {
      font-size: 48px;
      line-height: 1.2;
      letter-spacing: 0.04em;
      color: #264061;

      span {
        font-size: 16px;
        line-height: 58px;
        margin-left: 10px;
      }
    }
  }

  .daily-calorie-text {
    width: 280px;
    margin: 20px auto;
    font-size: 14px;
    line-height: 1.21;

    @media screen and (min-width: 768px) {
      margin: 12px auto 20px auto;
    }
  }

  .daily-calorie-list {
    width: 280px;
    margin-bottom: 40px;
    padding-left: 0px;
    list-style: none;

    font-weight: 400;
    font-size: 14px;
    line-height: 1.21;
    letter-spacing: 0.04em;
    color: ${prop => prop.theme.colors.$grey};

    li {
      &:not(:last-child) {
        margin-bottom: 16px;
      }

      span:first-child {
        margin-right: 5px;
      }
    }
  }

  .daily-calorie-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
