import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// getting the root element from public folder from index.html 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* calling the app.js file  */}
    <App />
  </React.StrictMode>
);

