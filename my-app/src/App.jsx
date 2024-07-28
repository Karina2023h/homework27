import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';
import './themes.css'; 

const App = () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ErrorBoundary>
      <div className={theme + '-theme'}>
        <Router>
          <header>
            <nav>
              <Link to="/">Головна</Link>
              <Link to="/contacts">Контакти</Link>
              <Link to="/about">Про мене</Link>
            </nav>
            <button onClick={toggleTheme}>
              {theme === 'light' ? 'Темна тема' : 'Світла тема'}
            </button>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </ErrorBoundary>
  );
};

export default App;

