import React from "react";
import { Link } from "react-router-dom";

const Button = props => {
  let template = null;

  const renderLoadMore = () => {
    return (
      <div className="load-more-btn" onClick={props.loadmore}>
        {props.cta}
      </div>
    );
  };

  const renderLinkTo = () => {
    return (
      <Link to={props.linkTo} className="load-more-btn">
        {props.cta}
      </Link>
    );
  };

  switch (props.type) {
    case "loadmore":
      template = renderLoadMore();
      break;
    case "linkto":
      template = renderLinkTo();
      break;
    default:
      template = null;
  }

  return template;
};

export { Button as default };
