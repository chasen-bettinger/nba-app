import React from "react";
import SideNav from "react-simple-sidenav";

const NavSideBar = props => {
  return (
    <div>
      <SideNav
        showNav={props.navStatus}
        onHideNav={props.onHideNav}
        navStyle={{
          background: "black",
          maxWidth: "220px"
        }}
      >
        hey
      </SideNav>
    </div>
  );
};

export { NavSideBar as default };
