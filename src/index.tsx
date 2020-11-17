import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';

ReactDOM.render(<App />, document.getElementById('app'));

if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
