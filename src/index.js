import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nava from './App.js'; // component import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nava heading="Enter the text to Uppercase" />
  </React.StrictMode>
);
