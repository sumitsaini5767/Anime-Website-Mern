import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Welcome from '../pages/Welcome/Welcome';
import Dashboard from '../pages/Dashboard/Dashboard';
import Common from '../pages/CommonPage/Common';
import Home from '../pages/Home/Home';
import Navpath from '../constants/Navpath';
import Movies from '../pages/Movies/Movies';
import ONAs from '../pages/ONAs/ONAs';
import OVAs from '../pages/OVAs/OVAs';
import Specials from '../pages/Specials/Specials';
import Trending from '../pages/Trending/Trending';
import TV_Series from '../pages/TV_Series/TV_Series';

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
        path: Navpath.homePath,
        element: <Home />,
      },
      {
        path: Navpath.moviesPath,
        element:<Movies/>
      },
      {
        path: Navpath.onasPath,
        element:<ONAs/>
      },
      {
        path: Navpath.ovasPath,
        element:<OVAs/>
      },
      {
        path: Navpath.specialsPath,
        element:<Specials/>
      },
      {
        path: Navpath.trendingPath,
        element:<Trending/>
      },
      {
        path: Navpath.tvSeriesPath,
        element:<TV_Series/>
      }
    ],
  }
]);

export default Router