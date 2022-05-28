import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { About } from "./pages/about";
import { Bubbles } from "./pages/bubbles";
import { Badges } from "./pages/badges";
import { Navigation } from "./components/navigation";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Bubbles />} />
        <Route path="/about" element={<About />} />
        <Route path="/badges" element={<Badges />} />
      </Routes>
    </div>
  );
};

export default App;
