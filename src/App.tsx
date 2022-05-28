import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import { About } from "./pages/about";
import { Bubbles } from "./pages/bubbles";
import { Badges } from "./pages/badges";
import { Navigation } from "./components/navigation";

const App: React.FunctionComponent = () => {
  return (
    <StyledApp>
      <Navigation />
      <StyledContent>
        <Routes>
          <Route path="/" element={<Bubbles />} />
          <Route path="/about" element={<About />} />
          <Route path="/badges" element={<Badges />} />
        </Routes>
      </StyledContent>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  width: "100%";
  height: "100%";
  min-height: 100vh;
`;

const StyledContent = styled.div`
  padding: 6% 8%;
`;

export default App;
