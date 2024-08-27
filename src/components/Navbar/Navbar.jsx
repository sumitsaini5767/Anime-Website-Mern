import React, { useState } from "react";
import path from "../../constants/Path";
import { Link } from "react-router-dom";
import Navpath from "../../constants/Navpath";
import "./Navbar.css";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [closeSidebar, setCloseSidebar] = useState(false);
  const toogleSidebar = () => {
    setCloseSidebar(true);
    setTimeout(() => {
      setShowSideBar(!showSideBar);
      setCloseSidebar(false);
    }, 100);
  };

  return (
    <>
      <div className="bg-themeColorBackground flex w-full h-16 px-3 items-center">
        <div className="headerLeft w-1/2 flex flex-row">
          <button
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
            className="flex items-center mr-5"
          >
            <img alt="menuIcon" className="h-6 w-6 cursor-pointer" src={path.bars_white} />
          </button>
          <img
            alt="logo"
            className="h-10 w-28 cursor-pointer mr-4"
            src={path.logo}
          />
          <div className="flex items-center pl-3 pr-1 bg-white h-10 mr-5">
            <input
              type="text"
              className="outline-none w-72"
              placeholder="Search anime..."
            />
            <button>
              <img alt="searchIcon" className="h-4 w-4 mr-4" src={path.searchIcon} />
            </button>
            <button
              className="bg-themeSecondaryColor px-2 rounded-sm hover:bg-themeSecondarybright
              mr-1
              "
            >
              <p className="text-white">Filter</p>
            </button>
          </div>
          <button className="flex flex-col justify-between items-center mr-4">
            <img alt="shuffleIcon" className="h-5 w-5" src={path.shuffleIcon} />
            <p className="text-white text-xs">Random</p>
          </button>
          <button className="flex flex-col justify-between items-center text-xs w-20">
            <div className="flex flex-row items-center justify-center w-14">
              <p className="bg-themeColor w-7 rounded-tl-sm rounded-bl-sm">
                EN
              </p>
              <p
                className="bg-themeSecondarybright w-7 text-white rounded-tr-sm rounded-br-sm
                  hover:text-themeColor font-semibold
                "
              >
                JP
              </p>
            </div>
            <p className="text-white">Anime name</p>
          </button>
        </div>
        <div className="headerRight w-1/5 h-full flex-1 flex items-center justify-end">
          <button className="bg-themeColor text-xs py-2 px-3 rounded-sm">
            Login
          </button>
        </div>
      </div>

      {showSideBar && (
        <div className="fixed top-0 w-full h-full bg-navBodyBackground z-20">
          <div
            className=" h-full "
            onClick={() => {
              toogleSidebar();
            }}
          ></div>
          <div
            className={`w-[17.5%] ${showSideBar ? "openSidebar" : ""}
              ${closeSidebar ? "closeSidebar" : ""}
              h-full py-5 bg-navBakground absolute top-0 z-10`}
          >
            <button
              className="bg-themeSecondaryColor ml-2 rounded-2xl flex flex-row 
                  items-center justify-center px-2 py-1 pr-3 text-white 
                "
              onClick={() => {
                toogleSidebar();
              }}
            >
              <img alt="leftIcon" className="h-4 w-4" src={path.leftIcon} />
              close menu
            </button>
            <ul
              className="mt-3 *:h-12 *:text-white *:text-sm *:font-semibold *:cursor-pointer 
                  *:hover:*:text-themeColor *:border-b-[1px] *:border-b-customWhite05
                  *:flex *:items-center *:w-full *:*:ml-4 tracking-wide *:*:w-full
                "
              onClick={() => {
                toogleSidebar();
              }}
            >
              <li>
                <Link to={Navpath.CommonPath} state={{PageType:"Home"}}>Home</Link>
              </li>
              <li>
                <Link to={Navpath.CommonPath} state={{PageType:"Trending"}}>Trending</Link>
              </li>
              <li>
                <Link to={Navpath.CommonPath} state={{PageType:"Tv Series"}}>TV Series</Link>
              </li>
              <li>
                <Link to={Navpath.CommonPath} state={{PageType:"Movies"}}>Movies</Link>
              </li>
              <li>
                <Link to={Navpath.CommonPath} state={{PageType:"OVAs"}}>OVAs</Link>
              </li>
              <li>
                <Link to={Navpath.CommonPath} state={{PageType:"ONAs"}}>ONAs</Link>
              </li>
              <li>
                <Link to={Navpath.CommonPath} state={{PageType:"Specials"}}>Specials</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
