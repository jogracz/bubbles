import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import { AppProvider } from "context";

import { About } from "./pages/about";
import { Bubbles } from "./pages/bubbles";
import { Badges } from "./pages/badges";
import { Navigation } from "./components/navigation";

const App: React.FunctionComponent = () => {
  return (
    <AppProvider>
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
    </AppProvider>
  );
};

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const StyledContent = styled.div`
  padding: 6% 8%;
  min-height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;
  /* width: 100%; */
  /* min-height: 100%; */
`;

export default App;
