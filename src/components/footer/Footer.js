import React from "react";
import { Link } from "react-router-dom";

import { CURRENT_YEAR } from "../../config";

const Footer = () => {
  const loadImage = () => (
    <Link to="/">
      <img alt="NBA Logo" src="/images/nba_logo.png" />
    </Link>
  );

  return (
    <div className="footer">
      {loadImage()}
      <p>{CURRENT_YEAR} all rights reserved.</p>
    </div>
  );
};

export { Footer as default };
