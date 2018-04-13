import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../hoc/Layout";
import NewsArticles from "../pages/articles/news/NewsArticles";
import VideosArticles from "../pages/articles/videos/VideosArticles";
import News from "../pages/articles/news/News";
import Videos from "../pages/articles/videos/Videos";
import SignIn from "../components/signin/SignIn";
import Dashboard from "../pages/dashboard/Dashboard";

const Routes = props => {
  return (
    <Layout user={props.user}>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/news" exact component={News} />
        <Route path="/video" exact component={Videos} />
        <Route path="/articles/:id" exact component={NewsArticles} />
        <Route path="/videos/:id" exact component={VideosArticles} />
        <Route path="/" exact component={Home} />;
      </Switch>
    </Layout>
  );
};

export { Routes as default };
