import React, { useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

// IMPORT COMPONENTS
import Header from './components/Header/Header';
import HomePage from './components/HomePage';
import About from './components/About/About';
import Project from './components/ProjectPage/Project';
import Center from './components/Header/Center';
import Footer from './components/Footer/Footer';
import ContactPage from './components/Contact/ContactPage';
import Axios from 'axios';

function App() {
  useEffect(() => {
    axios
      .get('http://localhost:4400/ssl')
      .then(data => {
        console.log(data.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Route path="/" component={Center} />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/projects/:id" component={Project} />
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
