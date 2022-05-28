import React from "react";
import styled from "styled-components";

import { Badge as BadgeType } from "types/badge";

import { Badge } from "./badge2";

interface TileProps {
  badge: BadgeType;
}

export const Tile: React.FunctionComponent<TileProps> = ({ badge }) => {
  return (
    <StyledContainer>
      <Badge name={badge.name} isWon={badge.name.length > 12} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: "100%";
  padding: 10px;
`;
