import React, { Component } from "react";
import { firebaseTeams, firebaseVideos, firebaseLooper } from "../../firebase";
import Button from "../buttons/Button";
import VideosListTemplate from "./VideosListTemplate";

class VideoList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      firebaseTeams.once("value").then(snap => {
        const teams = firebaseLooper(snap);
        this.setState({
          teams
        });
      });
    }

    firebaseVideos
      .orderByChild("id")
      .startAt(start)
      .endAt(end)
      .once("value")
      .then(snap => {
        const videos = firebaseLooper(snap);
        this.setState({
          videos: [...this.state.videos, ...videos],
          start,
          end
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  renderTitle = () => {
    if (this.props.title) {
      return (
        <h2 className="videos-list-title">
          <strong>NBA</strong> Videos
        </h2>
      );
    } else return null;
  };

  renderButton = () => {
    return this.props.loadmore ? (
      <Button
        type="loadmore"
        loadmore={() => this.loadMore()}
        cta="Load More Videos"
      />
    ) : (
      <Button cta="More Videos" type="linkto" linkTo="/videos" />
    );
  };

  renderVideos = () => {
    let template = null;

    switch (this.props.type) {
      case "card":
        template = (
          <VideosListTemplate
            data={this.state.videos}
            teams={this.state.teams}
          />
        );
        break;
      default:
        template = null;
    }

    return template;
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  };

  render() {
    return (
      <div className="videos-list-wrapper">
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    );
  }
}

export { VideoList as default };
