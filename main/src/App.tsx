import React from 'react';
import logo from './logo.svg';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>This is main.</h3>
      <Layout />
    </div>
  );
}

export default App;
