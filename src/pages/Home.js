import React from "react";
import NewsSlider from "../widgets/news-slider/NewsSlider";
import NewsList from "../widgets/news-list/NewsList";
import VideosList from "../widgets/videos-list/VideosList";

const Home = () => {
  return (
    <div>
      <NewsSlider start={0} end={3} />
      <NewsList type="card" loadmore={true} start={3} amount={3} />

      <VideosList
        type="card"
        title={true}
        loadmore={true}
        start={0}
        amount={3}
      />
    </div>
  );
};

export { Home as default };
