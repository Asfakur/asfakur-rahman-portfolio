import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
        <Route path="/about">
          {/* <About /> */}
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
