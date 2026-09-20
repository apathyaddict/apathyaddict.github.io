import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "../CSS/founder.css";
import { engineering, identity } from "../data/journey";

const { scale } = engineering;

const stack = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue", "Angular", "Node", "SQL",
  "MongoDB", "Firebase", "Stripe", "Tailwind", "Bootstrap", "Chakra", "Vercel", "GitHub Actions",
  "Docker", "Playwright", "Jest", "Git",
];

const journey = [
  { when: "2018", title: "Award-nominated history teacher", text: "Nominated for the Governor General's History Award for Excellence in Teaching." },
  { when: "2022", title: "Learning to code", text: "Left the classroom for a coding bootcamp, then shipped a project a week." },
  { when: "2024", title: "Founding LOCVM", text: "First commit on a problem physicians kept telling us about." },
  { when: "2025", title: "Pitching, and winning", text: "Pitched a product I'd built myself to rooms of judges. LOCVM has won six times; twice with me on stage." },
  { when: "Now", title: "Full-time CTO & co-founder", text: "Running product and engineering, shipping every week, hiring the team around it." },
];

const earlier = [
  { name: "cv-editor", what: "PDF privacy redaction service", stack: "Node · Express · PDF" },
  { name: "AWS server", what: "Serverless Lambda API", stack: "AWS Lambda · Node · AMA API", url: "https://github.com/apathyaddict/lambdaserverAskB" },
  { name: "hfo-calc", what: "FHO+ earnings calculator for Ontario physicians", stack: "JavaScript" },
];

const moments = [
  { src: "https://res.cloudinary.com/dc2qd4mzh/image/upload/f_auto,q_auto,w_1000/v1789495012/LOCVM-news/LocvmWinner_ozmced.png", alt: "LOCVM wins the Scale-Up Innovator Award", cls: "m-win", caption: "BVZ Scale-Up Innovator Award · $15,000" },
  { src: "https://res.cloudinary.com/dc2qd4mzh/image/upload/f_auto,q_auto,w_900/v1789869726/EvePortfolio/Site%20Elements/IMG_9697_qodggw.png", alt: "ChaiTech finalists on stage", cls: "m-stage", caption: "ChaiTech Den 6 · finalists" },
  { src: "https://res.cloudinary.com/dc2qd4mzh/image/upload/f_auto,q_auto,w_900/v1789869731/EvePortfolio/Site%20Elements/IMG_9642_pbfotd.jpg", alt: "Ève with the LOCVM banner", cls: "m-main", caption: "Toronto · 2026" },
  { src: "https://res.cloudinary.com/dc2qd4mzh/image/upload/f_auto,q_auto,w_900/v1789869735/EvePortfolio/Site%20Elements/IMG_3598_qt1yow.jpg", alt: "LOCVM team at BVZ", cls: "m-team", caption: "At BVZ" },
];

const skills = [
  "Founding & running a company", "Product strategy", "Building a product from zero to market",
  "Pitching & public speaking", "Team building & mentoring", "Hiring", "Teaching", "Writing",
  "Product design", "UI design", "Photoshop", "Illustrator", "Painting", "Bilingual EN / FR",
];

const FounderPage = ({ eveImage }) => {
  return (
    <div className="founder-page">
      <header className="marble md:hidden px-6 pt-4 pb-1 text-center">
        <h1 className="didone text-slate-700 text-xl name-div pb-2">Ève Aimée Seni</h1>
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 py-2 font-mono text-[10px] tracking-[0.18em] uppercase text-slate-700">
          <li><Link to="/" className="navlink">Home</Link></li>
          <li><a href="#about" className="navlink">Founder</a></li>
          <li><a href="#milestones" className="navlink">Milestones</a></li>
          <li><a href="#projects" className="navlink">Projects</a></li>
          <li><Link to="/art" className="navlink">Art</Link></li>
        </ul>
      </header>
      <header className="marble hidden md:flex w-3/4 mx-auto mt-10 flex-col">
        <div className="name-div py-4">
          <h1 className="didone text-center text-slate-700 text-4xl">Ève Aimée Seni</h1>
        </div>
        <nav>
          <ul className="flex items-center justify-center gap-12 py-5 font-mono text-[13px] tracking-[0.2em] uppercase text-slate-700">
            <li><Link to="/" className="navlink">Home</Link></li>
            <li><a href="#about" className="navlink">Founder</a></li>
            <li><a href="#milestones" className="navlink">Milestones</a></li>
            <li><a href="#projects" className="navlink">Projects</a></li>
            <li><Link to="/art" className="navlink">Art Portfolio</Link></li>
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
      <section id="about" className="over marble torn plate stay">
        <div className="relative max-w-[1060px] mx-auto px-6 pt-10 md:pt-24 pb-14 md:pb-36 grid md:grid-cols-[300px_1fr] gap-10 md:gap-16 items-start">
          <img src={eveImage} alt="" className="portrait justify-self-center" />
          <div>
            <h2 className="section-title">Ève</h2>
            <p className="mb-3">
              With a passion for art, culture and learning. I have a background in history and
              teaching. My love for the past colors all my creations.
            </p>
            <p className="mb-3">
              Today I'm the co-founder and tech lead of{" "}
              <a href={identity.links.site} target="_blank" rel="noreferrer" className="font-bold underline decoration-slate-400 underline-offset-4 accent-hover">
                LOCVM
              </a>
              , a healthcare locum marketplace for Canada that I've built from the first commit.
            </p>
            <p>
              Here you will find my projects, my skills, and everything coding related. If you want
              to discover my paintings head to the art section.
            </p>
            <p className="museum-line">
              Why does this look like a museum? Because as a child, growing up in Paris, I wanted to work at the Louvre, and I
              never got over it.
            </p>
          </div>
        </div>
      </section>

      {/* Journey: Acropolis sky */}
      <section id="milestones" className="over stone-band clay-band stay">
        <img src="/images/founder/caryatids.jpg" alt="" className="band-photo" />
        <div className="relative max-w-[1100px] mx-auto px-6 pt-10 md:pt-14 pb-14 md:pb-28 grid md:grid-cols-[1fr_44%] gap-10 items-start">
          <div>
          <h2 className="section-title">Milestones</h2>
          <ol className="timeline">
            {journey.map((step) => (
              <li key={step.title} className={step.when === "Now" ? "is-now" : undefined}>
                <p className="when">{step.when}</p>
                <div className="entry">
                  <span className="dot" />
                  <p className="didone text-xl leading-snug">{step.title}</p>
                  <p className="text-sm mt-1">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          </div>
          <div className="moments">
            {moments.map((m) => (
              <figure key={m.src} className={m.cls}>
                <img src={m.src} alt={m.alt} loading="lazy" />
                <figcaption>{m.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Projects: LOCVM first, a few earlier pieces after */}
      <section id="projects" className="over marble">
        <div className="relative max-w-[1100px] mx-auto px-6 pt-10 md:pt-14 pb-14 md:pb-28">
          <h2 className="section-title">Projects</h2>
          <div className="grid md:grid-cols-[55%_1fr] gap-12 items-center">
            <div className="shot stackshot">
              <img src="/images/founder/locvm-2.jpg" alt="LOCVM features" className="shot-back" />
              <img src="/images/founder/locvm-3.jpg" alt="LOCVM homepage" className="shot-front" />
            </div>
            <div>
              <p className="didone text-2xl mb-2">LOCVM</p>
              <p className="text-sm mb-4">
                A healthcare locum marketplace for Canada — designed, built, and run by me since the
                first commit. One codebase, everything inside:
              </p>
              <ul className="flex flex-wrap gap-1.5 mb-6">
                {[
                  "Geospatial job search & map",
                  "Real-time messaging",
                  "Booking state machine",
                  "Payments (JetPay, Stripe)",
                  "CPSO licence verification",
                  "Job-centric matching engine",
                  "Digests & notifications",
                  "Recruiter subscriptions",
                  "25-page admin suite",
                  "News CMS & podcast",
                ].map((f) => (
                  <li key={f} className="tag">{f}</li>
                ))}
              </ul>
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {[
                  [`${Math.round(scale.linesOfCode / 1000)}k`, "lines of code"],
                  [scale.taggedReleases, "releases"],
                  [scale.unitTests.toLocaleString("en-CA"), "unit tests"],
                  [scale.components, "components"],
                ].map(([n, label]) => (
                  <div key={label}>
                    <dt className="didone text-2xl leading-none accent">{n}</dt>
                    <dd className="eyebrow mt-1">{label}</dd>
                  </div>
                ))}
              </dl>
              <p className="mono">
                Next.js · React · Server Actions · MongoDB · Firebase · Stripe · JetPay · Vercel · GitHub Actions · self-hosted runners · Playwright · Jest
              </p>
              <a href={identity.links.site} target="_blank" rel="noreferrer" className="eyebrow accent-hover font-bold !opacity-100 inline-block mt-6">
                locvm.ca →
              </a>
            </div>
          </div>

          <p className="eyebrow mt-14">Other projects</p>
          <div className="grid sm:grid-cols-3 gap-6 mt-2">
            {earlier.map((p, i) => {
              const Tag = p.url ? "a" : "div";
              const linkProps = p.url ? { href: p.url, target: "_blank", rel: "noreferrer" } : {};
              return (
                <Tag key={p.name} {...linkProps} className="card">
                  <span className="eyebrow">0{i + 1}</span>
                  <span className="didone text-2xl mt-2">{p.name}</span>
                  <span className="text-sm mt-1">{p.what}</span>
                  <span className="mono mt-3">{p.stack}</span>
                </Tag>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stack: Parthenon stone */}
      <section id="stack" className="over clay-band">
        <img src="/images/founder/parthenon-cutout.png" alt="" className="stack-cutout" />
        <div className="relative max-w-[1100px] mx-auto px-6 p-10 grid md:grid-cols-[40%_1fr] gap-8">
          <div className="hidden md:block" />
          <div>
            <h2 className="section-title">Stack &amp; skills</h2>
            <p className="eyebrow">Stack</p>
            <p className="mono">{stack.join("  ·  ")}</p>
            <p className="eyebrow mt-6">Skills</p>
            <p className="mono">{skills.join("  ·  ")}</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="over marble contact">
        <div className="max-w-[1100px] mx-auto px-6 pt-10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="section-title">Let's talk.</h2>
            <p className="mono">eve@locvm.ca · English / français</p>
          </div>
          <div className="flex gap-5">
            <a href={identity.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="accent-hover"><FaLinkedin className="h-5 w-5" /></a>
            <a href="https://github.com/apathyaddict" target="_blank" rel="noreferrer" aria-label="GitHub" className="accent-hover"><FaGithub className="h-5 w-5" /></a>
            <a href="mailto:eve@locvm.ca" aria-label="Email" className="accent-hover"><MdEmail className="h-5 w-5" /></a>
          </div>
        </div>
        <p className="max-w-[1100px] mx-auto px-6 pt-4 pb-4 text-center mono border-t border-slate-700/15">© 2026 — Designed, coded, and created by Eve Seni</p>
      </section>
    </div>
  );
};

export default FounderPage;
