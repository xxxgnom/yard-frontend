import React, { Component } from "react";
import "./App.css";
//import './style.css';
//import './complexes.css';
//import './complex.css';
import Header from "./Header";
import Footer from "./Footer";
import List from "./Complexes/List";
import Show from "./Complexes/Show";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header first="Купить" second="Снять" third="Наши агенты" />
          <Route exact path="/" component={List} />
          <Route path="/complexes/id" component={Show} />
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
