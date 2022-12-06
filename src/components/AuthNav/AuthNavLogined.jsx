import React from 'react';

import { Cont, Diary, Calc } from './AuthNav.styled';

export default function AuthNavLogined({ onClick }) {
  return (
    <Cont>
      <Diary to="diary" onClick={onClick}>
        Щоденник
      </Diary>
      <Calc to="calculator" onClick={onClick}>
        Калькулятор
      </Calc>
    </Cont>
  );
}
