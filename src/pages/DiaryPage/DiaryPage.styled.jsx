import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 40px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 100px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-top: 0;
  }
`;

export const DivUserMenu = styled.div`
  text-align: end;
  background-color: #eff1f3;
`;

export const CalendarStyles = styled.label`
  width: 160px;
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  .calendar {
    font-family: ${({ theme: { fonts } }) => fonts.verdana};
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    border: none;
    width: 140px;
    outline: none;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 34px;
      line-height: 41px;
      width: 220px;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 270px;
    margin-bottom: 60px;
  }

  .calendar_icon:hover {
    cursor: pointer;
    fill: ${prop => prop.theme.colors.$orange};
  }
`;

export const ButtonOpenModalForm = styled.button`
  display: block;
  width: 48px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  border-radius: 50%;
  background: transparent;
  line-height: 0;
  color: ${prop => prop.theme.colors.$orange};
  border: 3px solid ${prop => prop.theme.colors.$orange};
  padding: 0;
  cursor: pointer;
  :hover {
    background: ${prop => prop.theme.colors.$orange};
    color: ${prop => prop.theme.colors.$white};
    border: none;
  }
`;

export const Parag = styled.p`
  color: ${prop => prop.theme.colors.$orange};
  margin-bottom: 40px;
`;
