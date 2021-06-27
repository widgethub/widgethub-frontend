import React from "react";
import './css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Layout from './layouts/layouts';
import LayoutLogin from './layouts/layoutlogin'
import { Home, Profiles, Login, SignUp } from './components/components';


export default function App() {
  return (
    <div>
       <div className="content">
          <Switch>
            <RouteWrapper exact path="/" component={Home} layout={Layout}></RouteWrapper>
            <RouteWrapper exact path="/profiles" component={Profiles} layout={Layout}></RouteWrapper>
            <RouteWrapper exact path="/login" component={Login} layout={LayoutLogin}></RouteWrapper>
            <RouteWrapper exact path="/signup" component={SignUp} layout={LayoutLogin}></RouteWrapper>
          </Switch>
        </div>
    </div>
  );

}

function RouteWrapper({
  component: Component, 
  layout: Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}
