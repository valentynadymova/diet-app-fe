import styled from 'styled-components';

export const ModalTitle = styled.h2`
  font-family: ${props => props.theme.fonts.verdana};;
  padding-left: 20px;
  padding-right: 48px;
  padding-top: 40px;
  margin: 0 0 40px 0;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.44;
  text-align: center;

  color: ${props => props.theme.colors.$black};

  @media (min-width: 768px) {
    font-size: 26px;
    line-height: 1.2;
    padding-top: 64px;
    padding-left: 153px;
    padding-right: 153px;
    margin: 0 0 20px 0;
    text-align: center;
  }
`
export const StyledTotalCalories = styled.p`
  font-family: ${props => props.theme.fonts.verdana};
  position: relative;
  margin: 0 0 32px 0;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.04em;

  color: ${props => props.theme.colors.$blue};`

export const StyledKcal = styled.span`
     font-size: 16px;
  line-height: 1.18;
  letter-spacing: 0.04em;`
    
export const StyledWrapper = styled.div`
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 768px) {
    padding-left: 171px;
    padding-right: 171px;
  }`    

export const StyledTitleFood = styled.h3`
  font-family: ${props => props.theme.fonts.verdana};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 0;
  letter-spacing: 0.04em;

  color:  ${props => props.theme.colors.$black};

  border: none;
  border-top: 1px solid rgba(224, 224, 224, 0.2);
  display: block;
  outline: none;
  padding: 20px 0 0;
  width: 280px;

  @media (min-width: 768px) {
    border-top: 1px solid rgb(224, 224, 224);
    width: 330px;
    padding: 12px 0 0;
  }`

export const StyledModalList = styled.ol`
  display: block;
  padding: 0 0 0 20px;
  text-align: center;
  margin: 27px 0 0 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: ${props => props.theme.colors.$grey};

`

export const StyledItem = styled.li`
   &:not(:last-child) {
    margin-bottom: 21px;
  }`   


export const StyledButton = styled.button`
    font-family: ${props => props.theme.fonts.verdana};
    display: block;
    width: 210px;
    height: 43px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
  
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    border-color: transparent;
    color:${props => props.theme.colors.$white};
    background:${props => props.theme.colors.$orange};
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    border-radius: 30px;
    cursor: pointer;
   margin-left: auto;
   margin-right: auto;
   margin-top: 40px;

`


