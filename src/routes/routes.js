import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../hoc/Layout";
import NewsArticles from "../pages/articles/news/NewsArticles";
import VideosArticles from "../pages/articles/videos/VideosArticles";
import News from "../pages/articles/news/News";
import Videos from "../pages/articles/videos/Videos";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/news" exact component={News} />
          <Route path="/video" exact component={Videos} />
          <Route path="/articles/:id" exact component={NewsArticles} />
          <Route path="/videos/:id" exact component={VideosArticles} />
          <Route path="/" exact component={Home} />;
        </Switch>
      </Layout>
    );
  }
}

export { Routes as default };
