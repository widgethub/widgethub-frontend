import React from "react";
import './css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import  Layout  from './layouts/layouts';
import { Home, Profiles, Login } from './components/components';


export default function App() {
  return (
    <div>
       <div class="content">
          <Switch>
            <RouteWrapper exact path="/" component={Home} layout={Layout}></RouteWrapper>
            <RouteWrapper exact path="/profiles" component={Profiles} layout={Layout}></RouteWrapper>
            <RouteWrapper exact path="/login" component={Login} layout={Layout}></RouteWrapper>
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
