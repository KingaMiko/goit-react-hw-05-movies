import React from 'react';
import PropTypes from 'prop-types';
import { Puff } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = ({ color = '#FFC0CB', height = 100, width = 100 }) => (
  <LoaderContainer>
    <Puff color={color} height={height} width={width} />
  </LoaderContainer>
);

Loader.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Loader;
