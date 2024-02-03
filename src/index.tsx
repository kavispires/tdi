import './styles.scss';
import React from 'react';

import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const logo = require('./logo.svg').default;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
