import React from "react";
import styled from "styled-components";

import { Bubble } from "./components/bubble";

export const Bubbles: React.FunctionComponent = () => {
  const count = 26;

  return (
    <StyledBubbles>
      {[...Array(count)].map((bubble, index) => (
        <Bubble key={index} />
      ))}
    </StyledBubbles>
  );
};

const StyledBubbles = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100%;
  background-color: palevioletred;
`;
