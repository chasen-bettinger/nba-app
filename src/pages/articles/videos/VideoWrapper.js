import React from "react";

const VideoWrapper = props => {
  const renderVideoInfo = () => {
    return props.video.id ? (
      <div className="video-wrapper">
        <h1 className="article-title">{props.video.title}</h1>
        <iframe
          title="videoplayer"
          width="100%"
          height="200px"
          src={`https://www.youtube.com/embed/${props.video.url}`}
        />
      </div>
    ) : null;
  };

  return renderVideoInfo();
};

export { VideoWrapper as default };
