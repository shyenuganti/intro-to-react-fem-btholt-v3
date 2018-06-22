import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';


const ErrorPage = () => <h1 style={{ color:"red" }}>Oops the route cannot be found</h1>

const App = () => (
  <BrowserRouter>
    <div className="app">
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route path="/details/:id" component={Details} />
        <Route component={ErrorPage} />      
    </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('app'));