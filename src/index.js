import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 1. BrowserRouter ko import karein
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2. App component ko BrowserRouter se wrap karein */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);