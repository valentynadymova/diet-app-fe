import { React } from 'react';
export {ModalTitle, StyledTotalCalories, StyledKcal, StyledWrapper, StyledTitleFood, StyledModalList, StyledItem, StyledButton} from './ModalText.styled'


export default function ModalText() {


  return (
    <>
      <ModalTitle >
        Your recommended daily${(<br />)} calorie intake is
      </ModalTitle>
      <StyledTotalCalories >
        2800 <StyledKcal>kcal</StyledKcal>
      </StyledTotalCalories>
      <StyledWrapper >
        <StyledTitleFood >
          Foods you should not eat
        </StyledTitleFood>
        <StyledModalList >
          <StyledItem ></StyledItem>
          <StyledItem ></StyledItem>
          <StyledItem ></StyledItem>
          <StyledItem ></StyledItem>
        </StyledModalList>
      </StyledWrapper>
      <StyledButton type="button">
        Start losing weight
      </StyledButton>
    </>
  );
}