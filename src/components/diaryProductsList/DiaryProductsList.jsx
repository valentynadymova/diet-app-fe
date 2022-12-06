import React from 'react';
import { DiaryProductsListItem } from '../diaryProductsListItem/DiaryProductsListItem';
import { DiaryProductsListStyled, Div } from './DiaryProductsList.styled';

export const DiaryProductsList = ({ eatenProductsList, isCurrentDay }) => {
  return (
    <Div>
      <DiaryProductsListStyled>
        <tbody className="EatenProductsList">
          {eatenProductsList &&
            eatenProductsList.map(product => (
              <DiaryProductsListItem
                product={product}
                isCurrentDay={isCurrentDay}
                key={product._id}
              />
            ))}
        </tbody>
      </DiaryProductsListStyled>
    </Div>
  );
};
