import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
} from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiChakraui,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { paintings } from "../data/paintings";

gsap.registerPlugin(ScrollTrigger);

function NewHomepage() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Smooth scroll setup
    gsap.to(window, {
      duration: 0.5,
      ease: "power2.inOut"
    });

    // Create stacking effect for each section
    sectionsRef.current.forEach((section, index) => {
      if (index < sectionsRef.current.length - 1) {
        // Pin each section while the next one slides over
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        });
      }

      // Animate the content (title and subtitle) on scroll
      const title = section.querySelector(".section-title");
      const subtitle = section.querySelector(".section-subtitle");

      if (title) {
        gsap.fromTo(
          title,
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "center center",
              scrub: 1,
            },
          }
        );
      }

      if (subtitle) {
        gsap.fromTo(
          subtitle,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "center center",
              scrub: 1,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const topSkills = [
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#68A063" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#007ACC" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaVuejs />, name: "Vue", color: "#4FC08D" },
    { icon: <FaAngular />, name: "Angular", color: "#DD0031" },
  ];

  return (
    <div className="new-homepage relative overflow-hidden">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Ève Aimée Seni
          </Link>
          <div className="flex gap-6 text-sm">
            <a href="#founder" className="text-gray-700 transition hover:text-gray-900">Founder</a>
            <a href="#educator" className="text-gray-700 transition hover:text-gray-900">Educator</a>
            <a href="#developer" className="text-gray-700 transition hover:text-gray-900">Developer</a>
            <a href="#artist" className="text-gray-700 transition hover:text-gray-900">Artist</a>
          </div>
        </div>
      </nav>

      {/* Section 1: Founder - #D6F4ED (Soft Mint/White) */}
      <section
        id="founder"
        ref={(el) => (sectionsRef.current[0] = el)}
        className="relative flex h-screen w-full items-center justify-center pt-16 overflow-hidden"
        style={{ backgroundColor: '#D6F4ED' }}
      >
        {/* Subtle Background Pattern for Depth */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(0,0,0,0.1) 0%, transparent 50%)',
          }}></div>
        </div>

        <div className="z-10 flex w-full max-w-6xl flex-col items-center justify-center px-8 text-center lg:flex-row lg:text-left">
          <div className="mb-8 lg:mb-0 lg:mr-12">
            <img
              src="https://placeholder-for-locvm-screenshot.com/screenshot.png"
              alt="locvm.ca website"
              className="h-64 w-96 rounded-lg object-cover shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h1 className="section-title mb-6 text-6xl font-bold tracking-tight text-gray-900 md:text-7xl lg:text-8xl">
              FOUNDER
            </h1>
            <p className="section-subtitle mb-6 text-lg text-gray-700 md:text-xl lg:text-2xl">
              Eve cofounded locvm in 2025. It is now the number one locum website for physicians in Canada, winner of two accelerators.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Educator - #87BAC3 (Muted Blue) */}
      <section
        id="educator"
        ref={(el) => (sectionsRef.current[1] = el)}
        className="relative flex h-screen w-full items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#87BAC3' }}
      >
        {/* Background Pattern for Depth */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.2) 0%, transparent 50%)'
          }}></div>
        </div>

        <div className="z-10 flex w-full max-w-5xl flex-col items-center justify-center px-8">
          <h1 className="section-title mb-6 text-center text-6xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl drop-shadow-lg">
            EDUCATOR
          </h1>
          <h2 className="section-subtitle mb-12 max-w-3xl text-center text-xl font-semibold text-white/95 md:text-2xl drop-shadow-md">
            Nationally nominated teacher in 2018 for the Governor General's Award in Teaching Excellence
          </h2>

          {/* Video Section - No Card */}
          <div className="w-full max-w-4xl">
            <div className="aspect-video w-full rounded-lg shadow-2xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Teaching Excellence"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Developer - #53629E (Deep Periwinkle) */}
      <section
        id="developer"
        ref={(el) => (sectionsRef.current[2] = el)}
        className="relative flex h-screen w-full items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#53629E' }}
      >
        {/* Background Pattern for Depth */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%), linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="z-10 flex w-full max-w-6xl flex-col items-center justify-center px-8 text-center">
          <h1 className="section-title mb-8 text-6xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            DEVELOPER
          </h1>
          <p className="section-subtitle mb-8 max-w-2xl text-lg text-white/90 md:text-xl lg:text-2xl">
            Fullstack developer with a passion for clean code and elegant solutions
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/dev"
              className="rounded-full bg-white px-8 py-3 text-gray-900 transition duration-300 hover:bg-white/90"
            >
              View All Projects
            </Link>
            <a
              href="https://github.com/apathyaddict"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-3 text-white transition duration-300 hover:bg-white hover:text-gray-900"
            >
              <FaGithub size={20} /> GitHub Portfolio
            </a>
          </div>
          <div className="mt-12 grid w-full max-w-4xl grid-cols-4 gap-4 text-white md:grid-cols-8">
            {topSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="text-3xl" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <span className="text-xs">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Artist - #473472 (Deep Purple) */}
      <section
        id="artist"
        ref={(el) => (sectionsRef.current[3] = el)}
        className="relative flex h-screen w-full items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#473472' }}
      >
        {/* Background Pattern for Depth */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 40%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.3) 0%, transparent 50%)',
          }}></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)'
          }}></div>
        </div>

        <div className="z-10 flex w-full max-w-7xl flex-col items-center justify-center px-8">
          <h1 className="section-title mb-8 text-center text-6xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            ARTIST
          </h1>
          <p className="section-subtitle mb-6 max-w-2xl text-center text-lg text-white/90 md:text-xl">
            Creating art inspired by places, history, and literature
          </p>

          {/* Image Grid Preview */}
          <div className="mb-8 grid w-full max-w-5xl grid-cols-3 gap-4 md:grid-cols-6">
            {paintings.slice(0, 6).map((painting) => (
              <Link
                key={painting.id}
                to="/art/paintings"
                className="group aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={painting.image}
                  alt={painting.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            <Link
              to="/art/paintings"
              className="rounded-full bg-white px-8 py-3 text-gray-900 transition duration-300 hover:bg-white/90"
            >
              View Paintings
            </Link>
            <Link
              to="/art/prints"
              className="rounded-full border-2 border-white px-8 py-3 text-white transition duration-300 hover:bg-white hover:text-gray-900"
            >
              View Prints
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex-1 text-slate-700 flex flex-col justify-center items-center bg-white p-6 md:p-8">
        <p className="m-3 text-sm md:m-6 md:text-base lg:text-lg">
          © 2024 - Designed, coded, and created by Eve Seni
        </p>
      </footer>
    </div>
  );
}

export default NewHomepage;
