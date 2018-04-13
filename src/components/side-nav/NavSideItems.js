import React from "react";
import { Link, withRouter } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import { firebase } from "../../firebase";

const NavSideItems = props => {
  const items = [
    {
      icon: "home",
      text: "Home",
      link: "/",
      login: ""
    },
    {
      icon: "newspaper",
      text: "News",
      link: "/news",
      login: ""
    },
    {
      icon: "video",
      text: "Video",
      link: "/video",
      login: ""
    },
    {
      icon: "columns",
      text: "Dashboard",
      link: "/dashboard",
      login: false
    },
    {
      icon: "sign-out-alt",
      text: "Sign Out",
      link: "/sign-out",
      login: false
    },
    {
      icon: "sign-in-alt",
      text: "Sign In",
      link: "/sign-in",
      login: true
    }
  ];

  const element = (item, i) => (
    <Link key={i} to={item.link}>
      <div className="nav-item">
        <FontAwesome name={item.icon} />
        <p>{item.text}</p>
      </div>
    </Link>
  );

  const restricted = (item, i) => {
    let template = null;

    if (props.user === null && item.login) {
      template = element(item, i);
    }

    if (props.user !== null && !item.login) {
      if (item.link === "/sign-out") {
        template = (
          <div
            key={i}
            onClick={() => {
              firebase
                .auth()
                .signOut()
                .then(() => {
                  props.history.push("/");
                });
            }}
            className="nav-item"
          >
            <FontAwesome name={item.icon} />
            <p>{item.text}</p>
          </div>
        );
      } else {
        template = element(item, i);
      }
    }

    return template;
  };

  const createItems = () => {
    return items.map((item, i) => {
      return item.login !== "" ? restricted(item, i) : element(item, i);
    });
  };

  return <div className="nav-items">{createItems()}</div>;
};

export default withRouter(NavSideItems);
