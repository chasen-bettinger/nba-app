import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

const NavSideItems = () => {
  const items = [
    {
      icon: "home",
      text: "Home",
      link: "/"
    },
    {
      icon: "newspaper",
      text: "News",
      link: "/news"
    },
    {
      icon: "video",
      text: "Video",
      link: "/video"
    },
    {
      icon: "sign-out-alt",
      text: "Sign Out",
      link: "/sign-out"
    }
  ];

  const createItems = () => {
    return items.map((item, i) => {
      return (
        <Link to={item.link}>
          <div className="nav-item">
            <FontAwesome name={item.icon} />
            <p>{item.text}</p>
          </div>
        </Link>
      );
    });
  };

  return <div className="nav-items">{createItems()}</div>;
};

export { NavSideItems as default };
