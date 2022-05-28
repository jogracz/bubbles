import React from "react";
import styled from "styled-components";

import { Badge as BadgeType } from "types/badge";

import { Badge } from "./badge";

interface TileProps {
  badge: BadgeType;
}

export const Tile: React.FunctionComponent<TileProps> = ({ badge }) => {
  return (
    <StyledContainer>
      {badge.name}
      <Badge />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: "100%";
  background-color: blue;
  padding: 10px;
`;
