//import React from 'react';
import React, {Component} from 'react';

export default () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row middle-xs between-xs">
          <img src="compass-logo.svg" className="header-logo" />
          <nav className="main-nav">
            <a className="main-nav-link" href="#">Купить</a>
            <a className="main-nav-link" href="#">Снять</a>
            <a className="main-nav-link" href="#">Наши агенты</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
