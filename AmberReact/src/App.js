import React, { Component } from 'react';
import logo from './logo.svg';
import MainHeader from './main-header/MainHeader.jsx';
import WelcomPage from './home/Home.jsx';
import BlogSingle from './page-blog-single/BlogSingle.jsx';
import BlogGrid from './page-blog-grid/BlogGrid.jsx';
import Footer from './footer/Footer.jsx';

import { HashRouter as Router, Route, Link } from 'react-router-dom';


import './css/hover-min.css';
import './css/normalize.css';

import './App.css';





class App extends Component {
  render() {
    return (
        <Router>

          <div className="App">
              <MainHeader />

              <Route exact path = '/Home' component = {WelcomPage} />

              <Route path = '/blogGrid' component = {BlogGrid} />

              <Route path = '/blogSingle' component = {BlogSingle} />

              <Footer />
          </div>

        </Router>
    );
  }
}

export default App;
