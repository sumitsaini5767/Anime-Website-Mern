import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Welcome from '../pages/Welcome/Welcome';
import Dashboard from '../pages/Dashboard/Dashboard';
import Home from '../pages/Home/Home';
import Trending from '../pages/Trending/Trending';
import Filters from '../pages/Filters/Filters';
import RecentUpdates from '../pages/RecentUpdates/RecentUpdates';

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
        path: "/dashboard/trending",
        element: <Trending />,
      },
      {
        path: "/dashboard/filters",
        element: <Filters />,
      },
      {
        path: "/dashboard/recentUpdates",
        element: <RecentUpdates />,
      },
    ],
  }
]);

export default Router