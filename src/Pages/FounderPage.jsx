import { Link } from "react-router-dom";
import "../CSS/founder.css";
import { identity } from "../data/journey";

const stack = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue", "Angular", "Node", "SQL",
  "MongoDB", "Firebase", "Stripe", "Tailwind", "Bootstrap", "Chakra", "Vercel", "GitHub Actions",
  "Docker", "Playwright", "Jest", "Git",
];

const skills = [
  "Product design", "UI design", "Photoshop", "Illustrator", "Painting", "Teaching", "Writing",
  "Bilingual EN / FR",
];

const FounderPage = ({ eveImage }) => {
  return (
    <div className="founder-page">
      <header className="marble hidden md:flex w-3/4 mx-auto mt-4 flex-col">
        <div className="name-div py-4">
          <h1 className="text-center text-slate-700 text-3xl font-bold">Ève Aimée Seni</h1>
        </div>
        <nav>
          <ul className="flex items-center w-3/4 mx-auto justify-around py-4 text-slate-700">
            <li className="nav-li hover:font-bold"><Link to="/">Home</Link></li>
            <li className="nav-li hover:font-bold"><a href="#about">Founder</a></li>
            <li className="nav-li hover:font-bold"><a href="#stack">Stack</a></li>
            <li className="nav-li hover:font-bold"><Link to="/art">Art Portfolio</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero: Aphrodite, stays fixed while the page scrolls over her */}
      <section className="hero">
        <div className="hero-word didone" aria-label="Founder, Tech Lead">
          <span className="roll">
            <span>Founder</span>
            <span>Tech Lead</span>
          </span>
        </div>
      </section>

      {/* Marble: the founder half slides over the hero with a torn edge */}
      <section id="about" className="over marble torn">
        <div className="max-w-[1000px] mx-auto px-6 pt-24 pb-28 grid md:grid-cols-[340px_1fr] gap-14 items-center">
          <img src={eveImage} alt="" className="portrait justify-self-center" />
          <div>
            <p className="mb-3">
              With a passion for art, culture and learning. I have a background in history and
              teaching. My love for the past colors all my creations.
            </p>
            <p className="mb-3">
              Today I'm the co-founder and tech lead of{" "}
              <a href={identity.links.site} target="_blank" rel="noreferrer" className="font-bold underline decoration-bluegreen underline-offset-4 hover:text-bluegreen">
                LOCVM
              </a>
              , a healthcare locum marketplace for Canada that I've built from the first commit.
            </p>
            <p className="mb-3">
              In two years it has grown to 279 releases, become an official locum resource of the
              Ontario Medical Association, won IDEA Mississauga's EmpowHER Tech Launchpad, and gone
              live in two provinces.
            </p>
            <p>
              Here you will find my projects, my skills, and everything coding related. If you want
              to discover my paintings head to the art section.
            </p>
          </div>
        </div>
      </section>

      <div className="over cut-line" />

      {/* Forge: the coder half */}
      <section id="stack" className="over forge min-h-screen">
        <div className="max-w-[1100px] mx-auto px-6 py-20">
          <p className="text-xs tracking-widest uppercase text-bluegreen mb-6">Stack</p>
          <p className="text-sm md:text-base text-[#8b8f98] leading-loose">{stack.join("  ·  ")}</p>
          <p className="text-xs tracking-widest uppercase text-bluegreen mt-14 mb-6">Skills</p>
          <p className="text-sm md:text-base text-[#8b8f98] leading-loose">{skills.join("  ·  ")}</p>
        </div>
      </section>
    </div>
  );
};

export default FounderPage;
