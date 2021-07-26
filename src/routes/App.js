import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Home, Layout } from "../components";
import "../assets/styles/App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
