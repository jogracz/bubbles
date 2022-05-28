import React from "react";
import styled from "styled-components";

export const Badge = () => {
  return (
    <StyledBadge>
      <StyledBadgeInner>Hello</StyledBadgeInner>
    </StyledBadge>
  );
};

const StyledBadge = styled.div`
  height: 50px;
  width: 50px;
  overflow: hidden;
`;
const StyledBadgeInner = styled.div`
  height: 50px;
  width: 50px;
  transform: rotate(45deg);
  background: #ee8c25;
`;
