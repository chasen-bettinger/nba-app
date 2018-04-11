import React, { Component } from "react";
import { URL } from "../../../config";
import axios from "axios";
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
    axios
      .get(`${URL}/articles?id=${this.props.match.params.id}`)
      .then(response => {
        let article = response.data[0];

        axios.get(`${URL}/teams/?id=${article.team}`).then(response => {
          this.setState({
            article,
            team: response.data
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
