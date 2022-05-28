import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { ROUTES } from "types/routes";

export const Navigation: React.FunctionComponent = () => {
  const { pathname } = useLocation();

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

  /* font-weight: bold; */
  font-size: 3vmin;
  /* color: #ffa8a8; */
  box-shadow: -0px -0px 10px #eee;
  & a {
    color: #444;
  }
`;
interface StyledLinkProps {
  selected: boolean;
}
const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 2%;
  text-align: center;
  border-left: 1px solid #eee;
  background-color: ${(props: StyledLinkProps) =>
    props.selected ? "#ffa8a8" : "white"};

  &:hover {
    background-color: #ffa8a8;
  }
`;
