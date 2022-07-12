import React from 'react';

import './App.css';
import Router from 'react-router-dom';


import MainArea from './app/components/MainArea/MainArea';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>LOX DIO</h1>
        <MainArea />
      </div>
    </Router>
  );
}

export default App;
