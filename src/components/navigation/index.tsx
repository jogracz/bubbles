import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "types/routes";

export const Navigation: React.FunctionComponent = () => {
  return (
    <div>
      <Link to={ROUTES.ABOUT}>About</Link>
      <Link to={ROUTES.BUBBLES}>Bubbles</Link>
      <Link to={ROUTES.BADGES}>Badges</Link>
    </div>
  );
};
