import React from 'react';
import ReactDOM from 'react-dom';
import "./sass/styles.scss";
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import { Home } from "./page/Home"
import { News } from "./page/News"
import { Contact } from "./page/Contact"


ReactDOM.render(
  <Router>
    <App >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/News" component={News} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);
