import React, { Component } from "react";
import { firebaseDB, firebaseLooper, firebaseTeams } from "../../../firebase";
import ArticleHeader from "../ArticleHeader";
import ArticleBody from "../ArticleBody";

class NewsArticles extends Component {
  state = {
    article: [],
    team: []
  };

  componentWillMount() {
    this.request();
  }

  request = () => {
    firebaseDB
      .ref(`articles/${this.props.match.params.id}`)
      .once("value")
      .then(snap => {
        const article = snap.val();

        firebaseTeams
          .orderByChild("teamId")
          .equalTo(article.team)
          .once("value")
          .then(snap => {
            const team = firebaseLooper(snap);
            this.setState({
              article,
              team
            });
          });
      });
  };

  render() {
    const article = this.state.article,
      team = this.state.team;

    return (
      <div className="article-wrapper">
        <ArticleHeader
          team={team[0]}
          date={article.date}
          author={article.author}
        />
        <ArticleBody article={article} />
      </div>
    );
  }
}

export { NewsArticles as default };
