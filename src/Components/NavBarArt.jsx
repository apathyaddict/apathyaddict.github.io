import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const NavBarArt = ({ scrollToSection, contactPage }) => {
  const [navDev, setNavDev] = useState(false);
  const handleClick = () => setNavDev(!navDev);
  const handleLinkClick = () => setNavDev(false);

  return (
    <>
      <section>
        <div className="flex-1 w-3/4 p-1 mx-auto mt-4 ">
          <div
            className={`name-div py-4 ${navDev ? "border-b-0" : "border-b-2"}`}
          >
            <h1 className="text-center text-slate-700 text-3xl font-bold">
              Ève Aimée Seni
            </h1>
          </div>
        </div>
        {/* Hamburger */}
        <div
          onClick={handleClick}
          className="lg:hidden z-10 absolute top-4 right-4 text-slate-700"
        >
          {!navDev ? <FaBars size={24} /> : <FaTimes size={24} />}
        </div>

        {/* MOBILE MENU */}
        {navDev && (
          <ul className="lg:hidden absolute top-0 right-0 h-screen w-full flex flex-col justify-center items-center bg-beige text-slate-700 ">
            <Link
              to="/art"
              onClick={handleLinkClick}
              className="hover:font-bold py-6 text-4xl"
            >
              Home
            </Link>

            <Link
              to="/art/prints"
              onClick={handleLinkClick}
              className="hover:font-bold py-6 text-4xl "
            >
              Watercolours
            </Link>
            <Link
              to="/art/paintings"
              onClick={handleLinkClick}
              className="hover:font-bold py-6 text-4xl"
            >
              Paintings
            </Link>
            <Link
              to="/art"
              onClick={() => scrollToSection(contactPage)}
              className="hover:font-bold py-6 text-4xl"
            >
              Contact
            </Link>
            <Link to="/dev" className="hover:font-bold py-6 text-4xl">
              Coding
            </Link>
          </ul>
        )}

        <nav className="hidden lg:flex w-3/4 mx-auto justify-around py-4 text-slate-700 menuart">
          <NavLink to="/art" className="hover:font-bold">
            <h2> Home</h2>
          </NavLink>

          <NavLink to="/art/prints" className="hover:font-bold">
            {({ isActive }) => (
              <h2 className={isActive ? " font-bold" : ""}>
                {" "}
                Prints and Watercolours
              </h2>
            )}
          </NavLink>

          <NavLink to="/art/paintings" className="hover:font-bold">
            {({ isActive }) => (
              <h2 className={isActive ? " font-bold" : ""}> Paintings</h2>
            )}
          </NavLink>
          <Link to="/art" className="hover:font-bold">
            <h2>Contact</h2>
          </Link>

          <Link to="/dev" className="hover:font-bold">
            <h2>Coding</h2>
          </Link>
        </nav>
      </section>
    </>
  );
};

export default NavBarArt;
