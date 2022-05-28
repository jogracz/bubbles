import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import { useAppContext } from "context";

export const Bubble: React.FunctionComponent = () => {
  const [popped, setPopped] = useState(false);

  const { handleAddPoint } = useAppContext();

  const handleClick = () => {
    setPopped(true);
    handleAddPoint();
  };

  return React.useMemo(() => {
    return (
      <StyledBubble
        onClick={handleClick}
        popped={popped}
        left={randomFromRange(1, 80)}
        top={randomFromRange(1, 80)}
      >
        <StyledBubbleInner size={randomFromRange(3, 100)} />
      </StyledBubble>
    );
  }, [popped]);
};

const randomFromRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const moveToTopAnimation = keyframes`
  0% { transform: translateY(-10%);;}
  50% { transform: translateY(0%)}
  100% { transform: translateY(-10%); }
`;

interface BubbleProps {
  popped: boolean;
  left: number;
  top: number;
}
const StyledBubble = styled.div`
  position: absolute;
  left: ${(props: BubbleProps) => `${props.left}%`};
  top: ${(props: BubbleProps) => `${props.top}%`};
  display: ${(props: BubbleProps) => (props.popped ? "none" : "block")};
  padding: 5px;
  border-radius: 50%;
  animation-name: ${moveToTopAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
  &:hover {
    cursor: pointer;
  }
`;

interface BubbleInnerProps {
  size: number;
}
const StyledBubbleInner = styled.div`
  width: ${(props: BubbleInnerProps) => `${props.size / 5}vmin`};
  height: ${(props: BubbleInnerProps) => `${props.size / 5}vmin`};
  background-color: pink;
  margin: 5px;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;
