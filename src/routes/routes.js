import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../hoc/Layout";
import NewsArticles from "../pages/articles/news/NewsArticles";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/articles/:id" exact component={NewsArticles} />
          <Route path="/" exact component={Home} />;
        </Switch>
      </Layout>
    );
  }
}

export { Routes as default };
