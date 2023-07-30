import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const MovieDetailsPage = styled.div`
  background-color: #0a0909;
  color: #e6e6e6;
  padding: 20px;
  padding-bottom: 100px;
  border-bottom: 1px solid #ffffff;
`;

export const MovieDetailsDiv = styled.div`
  display: flex;
  gap: 40px;
  background-color: #0a0909;
  border-bottom: 1px solid #ffffff;
`;

export const MovieDetailsGenres = styled.div`
  display: flex;
  gap: 8px;
`;

export const MovieDetailsLink = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  color: white;
  &.active {
    color: pink;
  }
`;

export const GoBackLink = styled(Link)`
  display: inline-block;
  color: #e6e6e6;
  font-size: 12px;
  text-decoration: none;
  background-color: transparent;
  border: 0.5px solid #e6e6e6;
  border-radius: 9px;
  padding: 2px 4px;
  margin-bottom: 20px;
`;
