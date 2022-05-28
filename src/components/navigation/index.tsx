import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { ROUTES } from "types/routes";

export const Navigation: React.FunctionComponent = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <StyledNav>
      <StyledLink to={ROUTES.ABOUT} selected={pathname === ROUTES.ABOUT}>
        About
      </StyledLink>
      <StyledLink to={ROUTES.BUBBLES} selected={pathname === ROUTES.BUBBLES}>
        Bubbles
      </StyledLink>
      <StyledLink to={ROUTES.BADGES} selected={pathname === ROUTES.BADGES}>
        Badges
      </StyledLink>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  font-weight: bold;
  font-size: 20px;
  color: #ffa8a8;
  & a {
    color: #ffa8a8;
  }
`;
interface StyledLinkProps {
  selected: boolean;
}
const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 20px;
  text-align: center;
  background-color: ${(props: StyledLinkProps) =>
    props.selected ? "#B6FFCE" : "white"};
  &:hover {
    background-color: #b6ffce;
  }
`;
