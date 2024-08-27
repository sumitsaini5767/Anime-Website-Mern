import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Welcome from '../pages/Welcome/Welcome';
import Dashboard from '../pages/Dashboard/Dashboard';
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
        path: "/dashboard/:PageType",
        element: <Common />,
      },
    ],
  }
]);

export default Router