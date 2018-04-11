import React, { Component } from "react";
import NewsSlider from "../../../widgets/news-slider/NewsSlider";
import NewsList from "../../../widgets/news-list/NewsList";

class News extends Component {
  render() {
    return (
      <div className="news">
        <NewsSlider start={0} end={3} />
        <NewsList type="card-img" loadmore={false} start={3} amount={9} />
      </div>
    );
  }
}

export { News as default };
