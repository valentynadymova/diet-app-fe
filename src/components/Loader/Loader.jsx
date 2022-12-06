import React from 'react';
import { Rings } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const AppLoader = () => {
  return (
    <LoaderWrapper>
      <Rings
        ariaLabel="loading-indicator"
        height={300}
        width={300}
        timeout={3000}
      />
    </LoaderWrapper>
  );
};

export default AppLoader;
