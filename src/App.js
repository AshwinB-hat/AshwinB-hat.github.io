import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/header.js';
import About from './components/about.js';
import Portfolio from './components/portfolio.js';
import Resume from './components/resume.js';
import Footer from './components/footer.js';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio/>
        <Footer/>
      </div>
    );
  }
}

export default App;
