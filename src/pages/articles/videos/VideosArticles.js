import React, { Component } from "react";
import axios from "axios";
import { URL } from "../../../config";
import ArticleHeader from "../ArticleHeader";
import VideoWrapper from "./VideoWrapper";
import VideosListTemplate from "../../../widgets/videos-list/VideosListTemplate";

//../../widgets/videos-list/VideoListTemplate

class VideosArticles extends Component {
  state = {
    video: [],
    team: [],
    teams: [],
    related: []
  };

  componentWillMount() {
    this.request();
  }

  request = () => {
    axios
      .get(`${URL}/videos?id=${this.props.match.params.id}`)
      .then(response => {
        let video = response.data[0];

        axios.get(`${URL}/teams/?id=${video.team}`).then(response => {
          this.setState({
            video,
            team: response.data
          });

          this.getRelated();
        });
      });
  };

  getRelated = () => {
    axios.get(`${URL}/teams`).then(response => {
      let teams = response.data;

      axios
        .get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
        .then(response => {
          this.setState({
            teams,
            related: response.data
          });
        });
    });
  };

  render() {
    const team = this.state.team[0],
      teams = this.state.teams,
      video = this.state.video,
      related = this.state.related;

    console.log(related);

    return (
      <div>
        <ArticleHeader team={team} />
        <VideoWrapper video={video} />
        <VideosListTemplate data={related} teams={teams} />
      </div>
    );
  }
}

export { VideosArticles as default };
