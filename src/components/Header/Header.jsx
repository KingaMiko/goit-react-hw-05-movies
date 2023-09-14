import React from 'react';
import { HeaderTag, HeaderNavList, StyledLink } from './Header.styled';

export function Header() {
  return (
    <HeaderTag>
      <HeaderNavList>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies </StyledLink>
      </HeaderNavList>
    </HeaderTag>
  );
}
