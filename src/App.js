import React from "react";
import './css/index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LayoutOne, LayoutTwo } from './layouts/layouts';
import { One, Two, Three, Four } from './components/components';

import Logo from './assets/logo.png'

export default function App() {
  return (
    <Router>
      <header>
        <img src={Logo} alt="logo"></img>

        <div class="bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
          <button class="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2 active" id="grid">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fill-current w-4 h-4 mr-2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            <span>Grid</span>
          </button>
          <button class="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2" id="list">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fill-current w-4 h-4 mr-2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            <span>List</span>
          </button>
        </div>
        
      </header>
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