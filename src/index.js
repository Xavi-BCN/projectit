import React from 'react';
import ReactDOM from 'react-dom/client';
import { DataUserContextProvider } from './aplication/DataUserContext';
import './index.css';
import { App } from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataUserContextProvider>
      <App />
    </DataUserContextProvider>
  </React.StrictMode>
);

