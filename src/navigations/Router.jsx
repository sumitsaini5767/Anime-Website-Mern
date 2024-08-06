import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Welcome from '../pages/Welcome/Welcome';
import Dashboard from '../pages/Dashboard/Dashboard';
import Home from '../pages/Home/Home';
import Common from '../pages/CommonPage/Common';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path:"/dashboard",
    element: <Dashboard/>,
    children: [
      {
        path: "/dashboard/",
        element: <Home />,
      },
      {
        path: "/dashboard/home",
        element: <Home />,
      },
      {
        path: "/dashboard/common",
        element: <Common />,
      },
    ],
  }
]);

export default Router