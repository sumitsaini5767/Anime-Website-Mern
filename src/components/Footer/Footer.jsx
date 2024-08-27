import React, { useEffect, useState } from "react";
import Path from "../../constants/Path";
import { Link } from "react-router-dom";
import Navpath from "../../constants/Navpath";

const Footer = () => {
  const [alphabetButtons, setAlphabetButtons] = useState([]);

  const createAlphabetButtons = () => {
    const buttons = [];
    buttons.push(
      <li key={"All"}>
        <Link
          to={Navpath.CommonPath}
          state={{ PageType: "A-Z List", letter: "All" }}
        >
          All
        </Link>
      </li>
    );
    buttons.push(
      <li key={"0-9"}>
        <Link
          to={Navpath.CommonPath}
          state={{ PageType: "A-Z List", letter: "0-9" }}
        >
          0-9
        </Link>
      </li>
    );
    for (let i = 65; i <= 90; i++) {
      const letter = String.fromCharCode(i);
      buttons.push(
        <li key={letter}>
          <Link
            to={Navpath.CommonPath}
            state={{ PageType: "A-Z List", letter: letter }}
          >
            {letter}
          </Link>
        </li>
      );
    }
    setAlphabetButtons(buttons);
  };

  useEffect(() => {
    createAlphabetButtons();
  }, []);

  return (
    <div className="relative z-10">
      <div
        className="bg-cover bg-no-repeat bg-center py-8 px-4  before:content-[''] before:absolute before:top-0 
        before:left-0 before:h-full before:w-full before:bg-gradient-to-b from-[#202125] to-[rgba(32,33,37,0)] z-0
        
        after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-full after:w-full 
        after:bg-gradient-to-t from-[#202125] to-[rgba(32,33,37,0)]
        "
        style={{ backgroundImage: `url(${Path.footerbg})` }}
      >
        <div className="relative z-10">
          <div className="pb-4 border-b-[1px] border-b-[rgba(255,255,255,0.15)] w-36 mb-5">
            <img
              alt="logo"
              className="h-10 w-28 cursor-pointer mr-4"
              src={Path.logo}
            />
          </div>
          <div className="flex flex-row items-center mb-5">
            <h3 className="text-white font-semibold pr-5 border-r-2">
              A-Z LIST
            </h3>
            <p className="text-white text-sm ml-5">
              Searching anime order by alphabet name A to Z.
            </p>
          </div>
          <div className="flex flex-row mb-5">
            <ul className="flex *:text-white *:mr-2 *:bg-themeSecondaryColor *:*:rounded-sm *:rounded-sm *:cursor-pointer *:hover:*:bg-themeColor
             *:hover:*:text-black *:*:px-2 *:*:py-1">
              {alphabetButtons}
            </ul>
          </div>
          <div className="flex flex-row text-white text-sm *:mr-10">
            <Link>Terms and services</Link>
            <Link>Policies</Link>
            <Link>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
