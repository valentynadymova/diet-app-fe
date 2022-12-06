import styled from 'styled-components';

export const DailyButton = styled.button`
  padding: 13px 25px;
  font-family: ${({ theme: { fonts } }) => fonts.verdana};
  font-weight: 700;
  font-size: 14px;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.verdana};
  align-items: center;
  justify-content: center;
  text-align: center;
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
`;
