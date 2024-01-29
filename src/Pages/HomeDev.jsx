import React from "react";
import "../CSS/devcss.css";

import Maindev from "../Components/Dev/Maindev";
import Projects from "../Components/Dev/Projects";
import Contact from "../Components/Dev/ContactDev";

const HomeDev = ({ eveImage }) => {
  return (
    <div>
      <Maindev {...{ eveImage }} />
      <Projects />
      <Contact />
      <footer className="flex-1 text-slate-700 flex flex-col justify-center items-center bg-beige p-6 md:p-2">
        <p className="m-3 text-sm md:m-6 md:text-base lg:text-lg">
          © 2024 - Designed, coded, and created by Eve Seni
        </p>
      </footer>
    </div>
  );
};

export default HomeDev;
