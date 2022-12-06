import { useDispatch, useSelector } from 'react-redux';
import {
  getUserName,
  getIsReducerSpinner,
} from '../../redux/authorization/auth-selectors';

import authOperations from '../../redux/authorization/auth-operations';
import { ContainerTextStyled } from './UserMenu.styled';
import AppLoader from '../Loader/Loader';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const reducerSpinner = useSelector(getIsReducerSpinner);

  return (
    <>
      <ContainerTextStyled>
        <p>{userName}</p>

        <button onClick={() => dispatch(authOperations.logOut())}>Вихід</button>

        {reducerSpinner && <AppLoader />}
      </ContainerTextStyled>
    </>
  );
}
