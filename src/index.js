import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
 
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');
const rootInstance = ReactDOM.createRoot(root);

rootInstance.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
