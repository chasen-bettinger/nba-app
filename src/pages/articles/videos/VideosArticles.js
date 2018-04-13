import React, { Component } from "react";
import {
  firebaseDB,
  firebaseLooper,
  firebaseTeams,
  firebaseVideos
} from "../../../firebase";
import ArticleHeader from "../ArticleHeader";
import VideoWrapper from "./VideoWrapper";
import VideosListTemplate from "../../../widgets/videos-list/VideosListTemplate";

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
    firebaseDB
      .ref(`videos/${this.props.match.params.id}`)
      .once("value")
      .then(snap => {
        const video = snap.val();

        firebaseTeams
          .orderByChild("teamId")
          .equalTo(video.team)
          .once("value")
          .then(snap => {
            const team = firebaseLooper(snap);
            this.setState({
              video,
              team
            });

            this.getRelated();
          });
      });
  };

  getRelated = () => {
    firebaseTeams.once("value").then(snap => {
      const teams = firebaseLooper(snap);

      firebaseVideos
        .orderByChild("team")
        .equalTo(this.state.video.team)
        .limitToFirst(3)
        .once("value")
        .then(snap => {
          const related = firebaseLooper(snap);
          this.setState({
            teams,
            related
          });
        });
    });
  };

  render() {
    const team = this.state.team[0],
      teams = this.state.teams,
      video = this.state.video,
      related = this.state.related;

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
