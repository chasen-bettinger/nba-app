import React, { Component } from "react";
import VideosList from "../../../widgets/videos-list/VideosList";

class Videos extends Component {
  render() {
    return (
      <VideosList
        type="card"
        title={true}
        loadmore={true}
        start={0}
        amount={10}
      />
    );
  }
}

export { Videos as default };
