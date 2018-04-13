import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import CardInfo from "../card/card-info/CardInfo";
import {
  firebaseTeams,
  firebaseArticles,
  firebaseLooper
} from "../../firebase";

class NewsList extends Component {
  state = {
    teams: [],
    items: [],
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

    firebaseArticles
      .orderByChild("id")
      .startAt(start)
      .endAt(end)
      .once("value")
      .then(snap => {
        const articles = firebaseLooper(snap);
        this.setState({
          items: [...this.state.items, ...articles],
          start,
          end
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  renderNews = type => {
    let template = null;

    switch (type) {
      case "card":
        template = this.state.items.map((item, i) => {
          return (
            <CSSTransition
              classNames={{
                enter: "news-list-wrapper",
                enterActive: "news-list-wrapper-enter"
              }}
              timeout={500}
              key={i}
            >
              <div className="card-copy">
                <Link to={`/articles/${item.id}`}>
                  <CardInfo
                    teams={this.state.teams}
                    team={item.team}
                    date={item.date}
                  />
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </CSSTransition>
          );
        });
        break;
      case "card-img":
        template = this.state.items.map((item, i) => {
          return (
            <CSSTransition
              classNames={{
                enter: "news-list-wrapper",
                enterActive: "news-list-wrapper-enter"
              }}
              timeout={500}
              key={i}
            >
              <div className="card-image-wrapper">
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `URL(../images/articles/${item.image})`
                  }}
                />
                <div className="card-copy">
                  <Link to={`/articles/${item.id}`}>
                    <CardInfo
                      teams={this.state.teams}
                      team={item.team}
                      date={item.date}
                    />
                    <h2>{item.title}</h2>
                  </Link>
                </div>
              </div>
            </CSSTransition>
          );
        });
        break;
      default:
        template = null;
    }

    return template;
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end + 1, end);
  };

  render() {
    return (
      <div>
        <TransitionGroup component="div" className="list">
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <Button
          type="loadmore"
          loadmore={() => this.loadMore()}
          cta="Load More News"
        />
      </div>
    );
  }
}

export { NewsList as default };
