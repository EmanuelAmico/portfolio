import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Home, Layout } from "../components";
import "../assets/styles/App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Redirect to="/home" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
