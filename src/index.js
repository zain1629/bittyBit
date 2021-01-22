import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/now-ui-kit.css";
import {createStore} from "redux";
import {Provider} from "react-redux"
import Home from './screens/Home';
import { reducer } from "./reducers/reducer";

const store = createStore(reducer);

  ReactDOM.render(
    <Provider store={store}>
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
      </BrowserRouter>
    </Provider>  ,
    document.getElementById("root")
  );



