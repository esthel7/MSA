import React from 'react';
import heart from './heart.svg';
import './App.css';

function App() {
  return (
    <div className="Sub">
      <img src={heart} className="Sub-logo" alt="logo" />
      <h3 className="Sub-text">This is sub.</h3>
    </div>
  );
}

export default App;
