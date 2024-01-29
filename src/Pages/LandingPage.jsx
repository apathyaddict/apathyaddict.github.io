import React from "react";
import { Link } from "react-router-dom";

import TextTyped from "../Components/TextAnimation/TextTyped";

const LandingPage = ({ eveImage }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" flex lg:flex-row md:flex-col sm:flex-col flex-col h-3/4 w-4/5">
        <div className="flex-1 h-full flex justify-center items-center">
          <img
            src={eveImage}
            alt=""
            className="rounded-full object-cover shadow-md imageEve"
          />
        </div>

        <div className=" flex-1 h-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center ">
            <p className="lg:pb-4 pb-2 mt-2 lg:text-xl md:text-lg sm:text-sm text-sm">
              Hello, I'm
            </p>
            <h1 className="lg:text-6xl md:text-5xl sm:text-5xl text-4xl text-slate-700">
              Ève Aimée Seni
            </h1>

            <TextTyped />
            <div className=" flex justify-between items-center m-4">
              <Link to="/dev">
                <button className="bg-slate-700 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out  hover:bg-white  hover:text-slate-700 m-4">
                  Developer
                </button>
              </Link>
              <Link to="/art">
                <button className="bg-slate-700 text-white font-bold rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-white  hover:text-slate-700 m-4">
                  Artist
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
