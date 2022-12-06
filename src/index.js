import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Components/Login.js';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);