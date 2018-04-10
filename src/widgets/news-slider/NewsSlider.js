import React, { Component } from "react";
import axios from "axios";
import SliderTemplate from "./SliderTemplate";
import { URL } from "../../config";

class NewsSlider extends Component {
  state = {
    news: []
  };

  componentWillMount() {
    axios
      .get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.end}`)
      .then(response => {
        this.setState({
          news: response.data
        });
      });
  }

  render() {
    return <SliderTemplate data={this.state.news} type="news" />;
  }
}

export { NewsSlider as default };
