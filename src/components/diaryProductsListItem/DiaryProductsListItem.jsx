import React from 'react';
import { useDeleteProductMutation } from '../../redux/rtkSliceForDiaryPage/userDayInfoSlice';
import { IoCloseSharp } from 'react-icons/io5';
import { Tr } from './DiaryProductsListItem.styled';
import toast from 'react-hot-toast';

export const DiaryProductsListItem = ({ product, isCurrentDay }) => {
  const [deleteProduct, { isError }] = useDeleteProductMutation();

  const delObj = { date: product.date, productTitle: product.productTitle };

  return (
    <>
      <Tr>
        <td className="widthTitle">{product.productTitle}</td>
        <td className="widthGramGram">{product.productWeight} г</td>
        <td className="widthGramKcal">{product.productCalories} ккал</td>
        <td>
          {isCurrentDay && (
            <button
              type="button"
              onClick={() => {
                deleteProduct(delObj);
                !isError &&
                  toast.success('Ви видалили продукт!', {
                    style: {
                      border: '1px solid #713200',
                      padding: '16px',
                      color: '#713200',
                    },
                    iconTheme: {
                      primary: '#713200',
                      secondary: '#FFFAEE',
                    },
                  });
              }}
            >
              <IoCloseSharp size={24} fill="inherrit" />
            </button>
          )}
        </td>
      </Tr>
    </>
  );
};
