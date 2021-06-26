import React from "react";
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LayoutOne, LayoutTwo } from './layouts/layouts';
import { One, Two, Three, Four } from './components/components';

export default function App() {
  return (
    <Router>
      <div>
      <h3>Content of main App component</h3>
      <ul>
        <li><Link to="/one">One</Link></li>
        <li><Link to="/two">Two</Link></li>
        <li><Link to="/three">Three</Link></li>
        <li><Link to="/four">Four</Link></li>
      </ul>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <RouteWrapper path="/one" component={One} layout={LayoutOne} />
        <RouteWrapper path="/two" component={Two} layout={LayoutOne} />
        <RouteWrapper path="/three" component={Three} layout={LayoutTwo} />
        <RouteWrapper path="/four" component={Four} layout={LayoutTwo} />
      </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
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