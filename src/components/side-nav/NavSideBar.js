import React from "react";
import SideNav from "react-simple-sidenav";
import NavSideItems from "./NavSideItems";

const NavSideBar = props => {
  return (
    <div>
      <SideNav
        showNav={props.navStatus}
        onHideNav={props.onHideNav}
        navStyle={{
          background: "#242424",
          maxWidth: "220px"
        }}
      >
        <NavSideItems />
      </SideNav>
    </div>
  );
};

export { NavSideBar as default };
