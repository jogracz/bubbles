import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import { About } from "./pages/about";
import { Bubbles } from "./pages/bubbles";
import { Badges } from "./pages/badges";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Bubbles />} />
        <Route path="/about" element={<About />} />
        <Route path="/badges" element={<Badges />} />
      </Routes>
    </div>
  );
};

export default App;
