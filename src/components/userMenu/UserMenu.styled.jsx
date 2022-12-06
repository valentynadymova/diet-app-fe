import styled from 'styled-components';

export const ContainerTextStyled = styled.div`
  justify-content: flex-end;

  font-size: 14px;
  line-height: 13px;

  p {
    display: inline-block;
    margin: 0;
    padding: 8px 15px 8px 0;

    border-right: 2px solid ${({ theme: { colors } }) => colors.borderColor};
  }

  button {
    border: none;
    outline: none;
    background-color: Transparent;
    padding: 0 0 0 15px;
    cursor: pointer;

    color: ${({ theme: { colors } }) => colors.$grey};

    &:hover {
      color: ${({ theme: { colors } }) => colors.$orange};
    }
  }

  @media screen and (min-width: 1280px) {
    margin-left: auto;
  }
`;
