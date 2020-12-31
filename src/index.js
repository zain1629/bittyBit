import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/now-ui-kit.css";

import Home from './screens/Home';

  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Switch>
          <Route
            path="/landing-page"
            render={(props) => <Home {...props} />}
          />
         
          <Redirect to="/landing-page" />
          <Redirect from="/" to="/landing-page" />
        </Switch>
      </Switch>
    </BrowserRouter>,
    document.getElementById("root")
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
