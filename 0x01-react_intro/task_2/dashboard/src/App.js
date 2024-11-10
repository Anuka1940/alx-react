// App.js
import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="holbertonlodo.jpg" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(false)}
        </p>
      </footer>
    </div>
  );
}

export default App;

