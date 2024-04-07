import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './componants/Root/Root';
import Home from './componants/Home/Home';
import Login from './componants/Login/Login';
import Resister from './componants/Resister/Resister';
import DaisyForm from './componants/DaisyForm/DaisyForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "/login",
        element: <Login></Login> ,
      },
      {
        path: "/resister",
        element: <Resister></Resister>,
      },
      {
        path: "/daisyform",
        element: <DaisyForm></DaisyForm>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
