import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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
    errorElement: <NotFound />,
  },
  {
    path: "/Login",
    element: <Login/>,
    errorElement: <NotFound />,
  }
]);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);