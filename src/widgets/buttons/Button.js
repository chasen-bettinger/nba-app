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

  switch (props.type) {
    case "loadmore":
      template = renderLoadMore();
      break;
    default:
      template = null;
  }

  return template;
};

export { Button as default };
