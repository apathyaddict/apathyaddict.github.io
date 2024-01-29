import React from "react";
import { FaStoreAlt, FaInstagram, FaEnvelope } from "react-icons/fa";

const ContactDivArt = ({ contactPage }) => {
  return (
    <div
      ref={contactPage}
      id="contactArt"
      name="contactArt"
      className="flex flex-col md:flex-row items-center h-full bg-beige"
    >
      <img
        className="imageBargue no-copy-img  h-1/2"
        src="https://res.cloudinary.com/dc2qd4mzh/image/upload/f_auto,q_auto/v1/EvePortfolio/Site%20Elements/kqao0431i4oldxjayu24"
      />

      <div className="flex-1 text-slate-700 flex flex-col justify-center items-center">
        <h3 className="md:text-5xl  sm:m-2 sm:p-2 text-4xl p-2">CONTACT</h3>

        <ul className="text-left">
          <p className="p-3 font-normal md:font-md ">
            <li className="m-2">Contact me for prints and purchases.</li>
            <li className="m-2"> Paintings are for sale.</li>
            <li className="m-2">
              Open to commissions: (portraits: only oil painting).
            </li>
          </p>
        </ul>

        <div>
          <div className="hover:text-darkbeige hover:scale-125">
            <p className="p-3 ">
              <FaStoreAlt className="inline mr-4 " />
              <a href="https://society6.com/femalesaint" target="_blank">
                society6
              </a>
            </p>
          </div>
          <div className="hover:text-darkbeige hover:scale-125">
            <p className="p-3">
              <FaInstagram className="inline mr-2" />
              <a href="https://www.instagram.com/female.saint/" target="_blank">
                instagram
              </a>
            </p>
          </div>
          <div className="hover:text-darkbeige hover:scale-125">
            <p className="p-3">
              <FaEnvelope className="inline mr-2" />
              <a href="mailto:arteveseni@gmail.com" target="_blank">
                email
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDivArt;
