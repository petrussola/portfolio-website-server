import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// MATERIAL-UI
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// IMPORT COMPONENTS
import Header from './components/Header/Header';
import HomePage from './components/HomePage';
import About from './components/About/About';
import Project from './components/ProjectPage/Project';
import Center from './components/Header/Center';
import Footer from './components/Footer/Footer';
import ContactPage from './components/Contact/ContactPage';

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className="App">
      {matches ? (
        <>
          <Route path="/" component={Center} />
          <Route path="/" component={Header} />
        </>
      ) : (
        <>
          <Route path="/" component={Header} />
          <Route path="/" component={Center} />
        </>
      )}
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/projects/:id" component={Project} />
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
