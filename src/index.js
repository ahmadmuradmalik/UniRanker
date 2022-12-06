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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);