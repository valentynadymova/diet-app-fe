import React from 'react';

import { Contain, Link, Sign } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <Contain>
      <Sign to="signin">Ввійти </Sign>
      <Link to="registration">Реєстрація</Link>
    </Contain>
  );
}
