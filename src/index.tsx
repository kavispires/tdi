import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import reportWebVitals from './reportWebVitals';
import logo from './logo.svg';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
