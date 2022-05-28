import React from "react";
import styled from "styled-components";

import { badgesList } from "utilities/badges";

import { Tile } from "./components/tile";

export const Badges: React.FunctionComponent = () => {
  return (
    <StyledBadges>
      {badgesList.map((badge) => (
        <Tile key={badge.name} badge={badge} />
      ))}
    </StyledBadges>
  );
};

const StyledBadges = styled.div`
  width: "100%";
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
