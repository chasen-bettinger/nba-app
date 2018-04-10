import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const SliderTemplate = props => {
  let template = null;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  switch (props.type) {
    case "news":
      template = props.data.map((item, i) => {
        return (
          <div key={i} className="slide">
            <div
              className="news-image"
              style={{
                backgroundImage: `url(../images/articles/${item.image})`
              }}
            />
            <Link to={`/articles/${item.id}`}>
              <h2 className="article-text">{item.title}</h2>
            </Link>
          </div>
        );
      });
      break;
    default:
      template = null;
  }

  return <Slider {...settings}>{template}</Slider>;
};

export { SliderTemplate as default };
