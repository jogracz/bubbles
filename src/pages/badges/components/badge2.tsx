import React from "react";
import styled from "styled-components";

interface BadgeProps {
  name: string;
  isWon: boolean;
}
export const Badge: React.FunctionComponent<BadgeProps> = ({ name, isWon }) => {
  return (
    <StyledBadge isWon={isWon}>
      <StyledName>{name}</StyledName>
    </StyledBadge>
  );
};

interface StyledBadgeProps {
  isWon: boolean;
}

const StyledBadge = styled.div`
  /* height: 100px;
  width: 50px; */
  width: 140px;
  height: 190px;
  border-radius: 8px;
  border-width: 4px;
  border-style: solid;
  border-color: #97dbae;
  background-color: #c3e5ae;
  position: relative;
  opacity: ${(props: StyledBadgeProps) => (props.isWon ? 1 : 0.3)};
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const StyledName = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  height: 30px;
  border-top-width: 4px;
  border-bottom-width: 4px;
  border-top-style: solid;
  border-bottom-style: solid;

  border-color: #97dbae;
  font-style: italic;
  font-weight: bold;
`;
