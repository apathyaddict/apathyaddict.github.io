import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaPaintBrush,
} from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiChakraui,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineConsoleSql } from "react-icons/ai";

const skills = [
  { icon: <FaHtml5 />, name: "Html", color: "#E44D26" },
  { icon: <FaCss3Alt />, name: "CSS", color: "#2965F1" },
  { icon: <FaBootstrap />, name: "Bootstrap", color: "#7952B3" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <SiChakraui />, name: "Chakra", color: "#319795" },
  { icon: <IoLogoJavascript />, name: "Javascript", color: "#F6DF1E" },
  { icon: <SiTypescript />, name: "Typescript", color: "#007ACC" }, // TypeScript color: Blue
  { icon: <FaReact />, name: "React", color: "#61DAFB" },
  { icon: <FaVuejs />, name: "Vue", color: "#4FC08D" },
  { icon: <FaAngular />, name: "Angular", color: "#DD0031" },
  { icon: <FaNodeJs />, name: "Node", color: "#68A063" },
  { icon: <AiOutlineConsoleSql />, name: "SQL", color: "#336791" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
  { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
  { icon: <SiAdobephotoshop />, name: "Photoshop", color: "#31A8FF" },
  { icon: <SiAdobeillustrator />, name: "Illustrator", color: "#FF9A00" },
  { icon: <FaPaintBrush />, name: "Painting" },
];

const Skills = () => {
  return (
    <section
      name="skills"
      className="flex flex-col align-center justify-center w-full  text-slate-700  h-full  mt-4">
      <div className="flex flex-row max-w-[1000px] p-4  mx-auto flex-1 justify-start  h-full w-full ">
        <h1 className="text-4xl  inline border-b-4  text-slate-700 border-bluegreen">
          Skills
        </h1>
      </div>

      <div
        className="flex-1 justify-start align-middle grid h-[250px] lg:grid-cols-8 sm:grid-cols-5 md:grid-cols-6 grid-cols-5 gap-6 mx-auto  w-full lg:w-3/4 mt-6 
        p-2 md:p-0">
        {skills.map((item, index) => (
          <div key={index} className="flex flex-col m-2  ">
            <div
              className="text-3xl sm:text-4xl md:text-5xl mx-auto "
              style={{ color: item.color || "inherit" }}>
              {item.icon}
            </div>

            <p className="text-xs font-normal text-slate-400 text-center mt-3">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
