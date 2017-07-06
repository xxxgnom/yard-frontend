import React, { Component } from 'react';
import './App.css';
import './style.css';
import './complexes.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>

      </div>
    );
  };
}

export default App;
