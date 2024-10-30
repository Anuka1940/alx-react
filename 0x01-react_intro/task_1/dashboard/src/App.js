import React from 'react';
import logo from './holbertonlogo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="holberton-logo" />
        <h1>
          School dashboard
        </h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
	<p> {getFooterCopy(false)} - {getFullYear()}</p>
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
