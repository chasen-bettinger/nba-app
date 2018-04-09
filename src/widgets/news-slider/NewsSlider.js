import React, { Component } from 'react';
import axios from 'axios';
import SliderTemplate from './SliderTemplate';

class NewsSlider extends Component {

    state = {
        news: []
    }

    componentWillMount() {
        axios.get(`http://localhost:3004/articles?_start=0&_end=3`)
        .then(response => {
            this.setState({
                news:response.data
            })
        })
    }

    render() {
       return  <SliderTemplate data={this.state.news} type="news" />
    }
}

export { NewsSlider as default };