import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Common = () => {
  //useLocation is a hook from React Router that returns the location object, which represents the current URL in the app.
  const location = useLocation();
  const { PageType } = location.state || {}; // Guarding against location.state being null

  useEffect(() => {
    //code for api call
    console.log(location);
    
  }, [location]);

  return (
    <div>{PageType}</div>
  );
};

export default Common;
