import React from "react";
import Path from "../../constants/Path";
import "./Welcome.css";
import { Link } from "react-router-dom";
import Navpath from "../../constants/Navpath";

function Welcome() {
  return (
    <div className="welcome h-screen bg-themeColorBackground overflow-x-hidden leading-5">
      <div className="topContainer h-20 bg-themeColorBackground flex items-end w-full px-32 py-1">
        <ul className="flex gap-14 *:text-white *:text-sm *:font-medium *:cursor-pointer">
          <li className="hover:text-themeColor"><Link to={Navpath.homePath} >Home</Link></li>
          <li className="hover:text-themeColor"><Link to={Navpath.trendingPath} >Trending</Link></li>
          <li className="hover:text-themeColor"><Link to={Navpath.moviesPath} > Movies</Link></li>
          <li className="hover:text-themeColor"><Link to={Navpath.specialsPath} >Specials</Link></li>
        </ul>
      </div>
      <div className="SearchContainer relative h-2/3 w-full">
        <div
          className="searchContainerBackground relative h-2/3 bg-cover mt-20
        before:content-[''] before:absolute before:-top-1 before:left-0 before:h-full before:w-full 
        before:bg-gradient-to-b from-[#202125] to-[rgba(32,33,37,0)]

        after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-full after:w-full 
        after:bg-gradient-to-t from-[#202125] to-[rgba(32,33,37,0)]

        "
          style={{ backgroundImage: `url(${Path.banner1})` }}
        ></div>
        <div className="flex absolute top-0 ml-[10%] h-2/3 w-[75%]">
          <div className="searchContainer flex flex-col h-full">
            <img alt="logo" className="h-14 w-40 cursor-pointer mb-5" src={Path.logo} />
            <div className="WelcomeSearchBar w-full flex flex-row justify-between mb-5">
              <input className="w-[88%] h-12 outline-none rounded-3xl pl-5 bg-white" placeholder="Search"/>
              <Link to={Navpath.CommonPath} state={{PageType:"Trending"}} className="w-[10%]">
                <div className="h-12 w-12 bg-themeColor rounded-full p-3 cursor-pointer">
                  <img alt="searchIcon" src={Path.searchIcon} />
                </div>
              </Link>
            </div>
            <div className="topSearchContainer text-white flex flex-row flex-wrap">
              
              <p className=" text-sm font-extralight">
                <span className="text-sm text-themeColor">Top Search: </span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente voluptas expedita similique voluptatum sunt ducimus in
                nam dolores odit animi repellat, perferendis maxime aperiam quam
              </p>
            </div>
          </div>
          <div className="relative characterImageContainer ">
            <img alt="charcterImg" className="" src={Path.character} />
          </div>
        </div>
      </div>
      <div className="bottomContainer px-32 relative top-[-11%]">
        <Link to={Navpath.CommonPath}  state={{PageType:"Home"}} className="fullWebsiteBtn bg-themeColor py-2 rounded-br-3xl rounded-3xl w-[55%] h-12 flex flex-row 
        justify-center items-center cursor-pointer">
          <span className="text-xl">Full Website</span>
          <img alt="arrow" className="h-7 w-7 ml-5" src={Path.arrowRightIcon} />
        </Link>
        <div className="aboutWebsite mt-10 *:mt-10 font-extralight ">
          <p className="text-white text-xs w-[60%] ">
            <strong>Zorox</strong> (<strong>Zoroto</strong>,{" "}
            <strong>Zorotv</strong>) is a free website for watching anime online
            that offers subbed or dubbed anime in ultra HD quality without any
            registration or payment. With over 1 billion monthly searches for
            anime related topics, it's no surprise that there has been a sharp
            rise in the number of free anime streaming sites. However, not all
            sites are created equal, which is why Zorox was created as one of
            the best free anime streaming sites for all anime fans worldwide.
          </p>
          <p className="text-white text-xs w-[60%] ">
            <strong>Zorox</strong> is a safe site to watch anime, with only one
            ad to cover server costs and constant scanning to ensure that all
            ads are clean. If you find any suspicious ads, you can forward the
            information to Zorox, and they will remove them.
          </p>
          <p className="text-white text-xs  w-[60%] ">
            Zorox stands out from other anime streaming sites because of its
            focus on safety, content library, quality/resolution, streaming
            experience, updates, user interface, device compatibility, and
            customer care. The site offers popular, classic, and current anime
            titles from all genres, including action, drama, kids, fantasy,
            horror, mystery, police, romance, school, comedy, music, game, and
            more. All titles come with English subtitles or are dubbed in
            multiple languages, and users can choose from various quality
            settings to ensure a smooth streaming experience.
          </p>
          <p className="text-white text-xs w-[60%] ">
            If you have trouble accessing Zorox, you can try{" "}
            <a href="https://anix.to">anix</a> or{" "}
            <a href="https://gogoanimex.to">gogoanime</a>, Zorox is committed to
            providing a trustworthy and safe site for anime streaming and offers
            excellent customer service. Give Zorox a try and spread the word if
            you like it.
          </p> 
        </div>
        <div className="copyrightContainer text-white text-xs mt-28">
            {" "}
            <p className="copyright">©2021 Zoro. All rights reserved.</p>{" "}
            <p className="mb-0 mt-2">
              <a href="/" target="_blank">
                Read Manga Online
              </a>
            </p>{" "}
          </div>
      </div>
    </div>
  );
}

export default Welcome;
