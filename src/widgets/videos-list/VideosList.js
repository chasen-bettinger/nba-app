import React, { Component } from "react";
import axios from "axios";
import { URL } from "../../config";
import Button from "../buttons/Button";

class VideoList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  renderTitle = () => {
    if (this.props.title)
      return (
        <h2 className="videos-list-title">
          <strong>NBA</strong> Videos
        </h2>
      );
  };

  render() {
    return <div className="videos-list-wrapper">{this.renderTitle()}</div>;
  }
}

export { VideoList as default };
