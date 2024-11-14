import React from 'react';
import logo from './logo.svg';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <div className="Main">
      <img src={logo} className="Main-logo" alt="logo" />
      <h3>This is main.</h3>
      <Layout />
    </div>
  );
}

export default App;
