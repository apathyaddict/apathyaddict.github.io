import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbMessageLanguage } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

const ContactDev = () => {
  return (
    <section name="contactDev" className="py-10  ">
      <div className=" h-full text-slate-700 m-6 mb-10 flex  flex-col justify-center ">
        <div className=" max-w-[1000px] p-4  mx-auto flex-1 flex justify-start  h-full w-full ">
          <h1 className="text-4xl  inline border-b-4  text-slate-700 border-bluegreen">
            Contact
          </h1>
        </div>

        <div className="max-w-[1000px]   mx-auto flex-1 flex flex-col sm:flex-row justify-start  h-full w-full  ">
          <div className="flex-1  items-center m-4 ">
            <h2>Let's work together! Send me a message.</h2>
            <h2 className="text-2 mt-4 ">
              <TbMessageLanguage className="inline icon h-6 w-6  text-slate-70" />{" "}
              <span>Bilingual : English / French</span>
            </h2>
            <h2 className="text-2l mt-4">
              <TbMessageLanguage className="inline icon h-6 w-6  text-slate-70" />{" "}
              <span> Bilingue : anglais / francais</span>
            </h2>
          </div>
          <div className="flex-1  flex   justify-center items-center m-4 border-red-500">
            <div className="flex-1 flex flex-row justify-end ">
              <a
                href="https://www.linkedin.com/in/eveseni/"
                className="hover:scale-125 hover:text-bluegreen"
                target="_blank"
              >
                <span>
                  <FaLinkedin className="icon h-10 w-10 m-4 transition-transform duration-300 ease-in-out " />
                </span>
              </a>
              <a
                href="https://github.com/apathyaddict"
                className="hover:scale-125 hover:text-bluegreen"
                target="_blank"
              >
                <span>
                  <FaGithub className="icon h-10 w-10 m-4 transition-transform duration-300 ease-in-out" />
                </span>
              </a>
              <a
                href="mailto:arteveseni@gmail.com"
                target="_blank"
                className="hover:scale-125 hover:text-bluegreen"
              >
                <span>
                  <MdEmail className="icon h-10 w-10 m-4 transition-transform duration-300 ease-in-out" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDev;
