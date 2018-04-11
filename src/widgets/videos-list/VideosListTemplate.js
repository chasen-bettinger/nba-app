import React from "react";
import { Link } from "react-router-dom";
import CardInfo from "../card/card-info/CardInfo";

function VideosListTemplate(props) {
  const renderVideoCard = () => {
    return props.data.map((video, i) => {
      console.log(video);
      return (
        <div className="video-card" key={i}>
          <div
            className="video-image"
            style={{ backgroundImage: `url(../images/videos/${video.image}` }}
          >
            <div className="video-icon" />
          </div>
          <div className="card-copy">
            <CardInfo teams={props.teams} team={video.team} date={video.date} />
            <Link to={`/videos/${video.id}`}>
              <h2>{video.title}</h2>
            </Link>
          </div>
        </div>
      );
    });
  };

  return <div className="video-card-wrapper">{renderVideoCard()}</div>;
}

export { VideosListTemplate as default };
