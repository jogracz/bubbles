import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

import { Bubble } from "./components/bubble";

interface BubblesProps {
  setPoppedCounter: Dispatch<SetStateAction<number>>;
}

export const Bubbles: React.FunctionComponent<BubblesProps> = ({
  setPoppedCounter,
}) => {
  const count = 26;

  return (
    <StyledBubbles>
      {[...Array(count)].map((bubble, index) => (
        <Bubble
          key={index}
          handleAdd={() => setPoppedCounter((prev) => prev + 1)}
        />
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
