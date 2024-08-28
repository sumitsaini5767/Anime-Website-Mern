import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Common from '../CommonPage/Common';

const Dashboard = () => {
  return (
    <div>
          <Navbar/>
          <Outlet />
          <Common/>
          <Footer/>
    </div>
  )
}

export default Dashboard