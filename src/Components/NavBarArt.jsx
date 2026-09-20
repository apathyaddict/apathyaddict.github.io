import { Link, NavLink } from "react-router-dom";
import "../CSS/founder.css";
import "../CSS/art.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/art", label: "Portfolio", end: true },
  { to: "/art/prints", label: "Prints & Watercolours" },
  { to: "/art/paintings", label: "Paintings" },
];

const NavBarArt = ({ scrollToSection, contactPage }) => {
  const items = (
    <>
      {links.map((l) => (
        <li key={l.to}>
          <NavLink
            to={l.to}
            end={l.end}
            className={({ isActive }) => `navlink ${isActive ? "is-active" : ""}`}
          >
            {l.label}
          </NavLink>
        </li>
      ))}
      <li>
        <Link to="/art" onClick={() => scrollToSection(contactPage)} className="navlink">
          Contact
        </Link>
      </li>
      <li>
        <Link to="/dev" className="navlink">
          Coding
        </Link>
      </li>
    </>
  );

  return (
    <div className="founder-page">
      <header className="marble md:hidden px-6 pt-4 pb-1 text-center">
        <h1 className="didone text-slate-700 text-xl name-div pb-2">Ève Aimée Seni</h1>
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 py-2 font-mono text-[10px] tracking-[0.18em] uppercase text-slate-700">
          {items}
        </ul>
      </header>
      <header className="marble hidden md:flex w-3/4 mx-auto mt-10 flex-col">
        <div className="name-div py-4">
          <h1 className="didone text-center text-slate-700 text-3xl">Ève Aimée Seni</h1>
        </div>
        <nav>
          <ul className="flex items-center justify-center gap-10 py-4 font-mono text-[11px] tracking-[0.2em] uppercase text-slate-700">
            {items}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBarArt;
