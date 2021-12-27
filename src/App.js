// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './additional.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Shared/header';
import Home from './components/Home/Home';
import Footer from './components/Shared/footer';
import Projects from './components/Projects/projects';


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
        <Route path="/about">
          {/* <About /> */}
        </Route>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
