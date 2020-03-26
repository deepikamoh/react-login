import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import notFound from './Components/NotFound/NotFound';
import signup from './Components/Signup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={signup}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Home" component={Home}/>
          <Route component={notFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
