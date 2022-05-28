import React from "react";
import styled from "styled-components";

import { badgesList } from "utilities/badges";

import { Tile } from "./components/tile";

interface BadgesProps {
  poppedCounter: number;
}

export const Badges: React.FunctionComponent<BadgesProps> = ({
  poppedCounter,
}) => {
  return (
    <StyledBadges>
      <p>{poppedCounter}</p>
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
