import React from "react";
import styled from "styled-components";

import { useAppContext } from "context";
import { badgesList } from "utilities/badges";

import { Tile } from "./components/tile";

export const Badges: React.FunctionComponent = () => {
  const { points } = useAppContext();
  return (
    <StyledBadges>
      <p>{points}</p>
      {badgesList.map((badge, index) => (
        <Tile key={index} badge={badge} />
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
