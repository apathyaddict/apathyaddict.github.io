import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import TextTyped from "../Components/TextAnimation/TextTyped";
import "../CSS/founder.css";

const LandingPage = ({ eveImage }) => {
  return (
    <div className="founder-page flex h-screen items-center justify-center">
      <div className=" flex lg:flex-row md:flex-col sm:flex-col flex-col h-3/4 w-4/5">
        <div className="flex-1 h-full flex justify-center items-center">
          <img
            src={eveImage}
            alt=""
            className="rounded-full object-cover shadow-md imageEve landing-photo"
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
            <nav className="flex gap-3 mt-10">
              <Link to="/dev" className="btn-a">Founder &amp; Coder</Link>
              <Link to="/art" className="btn-a">Artist</Link>
            </nav>
            <div className="flex gap-5 mt-8 text-slate-700">
              <a href="https://www.linkedin.com/in/eveseni/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="accent-hover"><FaLinkedin className="h-5 w-5" /></a>
              <a href="https://github.com/apathyaddict" target="_blank" rel="noreferrer" aria-label="GitHub" className="accent-hover"><FaGithub className="h-5 w-5" /></a>
              <a href="mailto:eve@locvm.ca" aria-label="Email" className="accent-hover"><MdEmail className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
