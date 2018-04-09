import React from "react";
import { Link } from "react-router-dom";

import FontAwesome from "react-fontawesome";

import NavSideBar from "./side-nav/NavSideBar";

const Header = props => {
  const loadImage = () => (
    <Link to="/">
      <img className="header-logo" alt="NBA Logo" src="/images/nba_logo.png" />
    </Link>
  );

  const loadMenu = () => {
    return (
      <div style={{ padding: "10px" }} onClick={() => props.onShowNav()}>
        <FontAwesome className="menu-bars" name="bars" />
      </div>
    );
  };

  return (
    <div className="header">
      <NavSideBar {...props} />
      <div className="header-items">
        {loadMenu()}
        {loadImage()}
      </div>
    </div>
  );
};

export { Header as default };
