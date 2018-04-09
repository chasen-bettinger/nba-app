import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../hoc/Layout";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" component={Home} />;
        </Switch>
      </Layout>
    );
  }
}

export { Routes as default };
