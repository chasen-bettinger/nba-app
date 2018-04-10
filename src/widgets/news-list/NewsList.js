import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../../config";

class NewsList extends Component {
  state = {
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount() {
    axios
      .get(`${URL}/articles?_start=${this.state.start}&_end=${this.state.end}`)
      .then(response => {
        this.setState({
          items: [...this.state.items, ...response.data]
        });
      });
  }

  renderNews = type => {
    let template = null;

    switch (type) {
      case "card":
        template = this.state.items.map((item, i) => {
          return (
            <div>
              <div className="news-item">
                <Link to={`/articles/${item.id}`}>
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          );
        });
        break;
      default:
        template = null;
    }

    return template;
  };

  render() {
    console.log(this.state.items);
    return <div>{this.renderNews(this.props.type)}</div>;
  }
}

export { NewsList as default };