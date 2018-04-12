import React, { Component } from "react";
import SliderTemplate from "./SliderTemplate";
import { firebaseArticles, firebaseLooper } from "../../firebase";

class NewsSlider extends Component {
  state = {
    news: []
  };

  componentWillMount() {
    firebaseArticles
      .limitToFirst(3)
      .once("value")
      .then(snap => {
        const news = firebaseLooper(snap);
        this.setState({ news });
      });

    // axios
    //   .get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.end}`)
    //   .then(response => {
    //     this.setState({
    //       news: response.data
    //     });
    //   });
  }

  render() {
    return <SliderTemplate data={this.state.news} type="news" />;
  }
}

export { NewsSlider as default };
