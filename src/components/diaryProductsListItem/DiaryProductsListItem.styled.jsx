import styled from 'styled-components';

export const Tr = styled.tr`
  font-family: ${({ theme: { fonts } }) => fonts.verdana};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: #212121;

  td:not(:last-child) {
    border-bottom: 2px solid ${prop => prop.theme.colors.borderColor};

    padding: 8px 0px 8px 0px;
    overflow: hidden;
  }

  .widthTitle {
    margin-right: 8px;
    max-width: 115px;
  }
  .widthGramGram {
    margin-right: 8px;
    white-space: nowrap;
    text-align: right;
  }
  .widthGramKcal {
    margin-right: 17px;
    white-space: nowrap;
    text-align: right;
    width: 60px;
  }
  button {
    padding: 0;
    background: inherit;
    border: none;
    cursor: pointer;
    line-height: 0;
    fill: #9b9faa;
    &:hover {
      transform: scale(1.2);
      fill: ${prop => prop.theme.colors.$orange};
    }
  }
`;
