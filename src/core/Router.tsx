import React from "react";
import { Route, Switch } from "react-router-dom";
import { Result } from 'antd';
import Home from "./components/Home";
import Servers from "./components/Servers";
import Crew from "./components/Crew";
import Faq from "./components/Faq";
import Tos from "./components/Tos";
import Privacy from "./components/Privacy";
import Rules from './components/Rules';

export default () => {
  return (
    <Switch>
      <Route
        exact path={'/'}
        component={Home}
      />
      <Route
        exact path={'/servers'}
        component={Servers}
      />
      <Route
        exact path={'/crew'}
        component={Crew}
      />
      <Route
        exact path={'/faq'}
        component={Faq}
      />
      <Route
        exact path={'/tos'}
        component={Tos}
      />
      <Route
        exact path={'/privacy-policy'}
        component={Privacy}
      />
      <Route
        exact path={'/rules'}
        component={Rules}
      />
      <Route
        path={''}
        component={() =>(<Result status="404" title="404" subTitle="Sorry, the page you visited does not exist."/>)}
      />
    </Switch>
  )
}