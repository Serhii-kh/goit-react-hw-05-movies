import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> </React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

//  basename = '/Serhii-kh/goit-react-hw-05-movies';
