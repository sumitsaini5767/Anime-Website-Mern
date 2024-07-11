import React from "react";
import Path from "../../constants/Path";

function Welcome() {
  return (
    <div className="welcome h-screen bg-themeColorBackground overflow-x-hidden">
      <div className="topContainer h-24 bg-themeColorBackground flex items-end w-full px-44">
        <ul className="flex gap-14 *:text-white *:text-sm *:font-medium *:cursor-pointer">
          <li className="hover:text-themeColor">Home</li>
          <li className="hover:text-themeColor">Trending</li>
          <li className="hover:text-themeColor">Recent Update</li>
          <li className="hover:text-themeColor">New Release</li>
        </ul>
      </div>
      <div className="h-2/3 w-full">
        <div
          className="relative h-2/3 bg-cover scale-150 hover:bg-no-repeat mt-20
         hover:duration-[2000ms] hover:ease-out hover:delay-100 
        translate-x-[25%] hover:-translate-x-[25%]
        before:content-[''] before:absolute before:-top-1 before:left-0 before:h-full before:w-full 
        before:bg-gradient-to-b from-[#202125] to-[rgba(32,33,37,0)]
        "
          style={{ backgroundImage: `url(${Path.banner1})` }}
        ></div>
      </div>
    </div>
  );
}

export default Welcome;
