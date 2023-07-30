import React from 'react';
import { Puff } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => (
  <LoaderContainer>
    <Puff color="#FFC0CB" height={100} width={100} />
  </LoaderContainer>
);

export default Loader;
