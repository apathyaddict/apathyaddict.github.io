import { FaStoreAlt, FaInstagram, FaEnvelope } from "react-icons/fa";

const ContactDivArt = ({ contactPage }) => {
  return (
    <section ref={contactPage} id="contactArt" className="marble contact">
      <div className="max-w-[1100px] mx-auto px-6 pt-10 md:pt-14 pb-6 grid md:grid-cols-[1fr_44%] gap-8 md:gap-12 items-center">
        <div>
          <h2 className="section-title">Let's talk.</h2>
          <ul className="mb-6">
            <li>Contact me for prints and purchases.</li>
            <li>Paintings are for sale.</li>
            <li>Open to commissions (portraits: oil painting only).</li>
          </ul>
          <p className="mono mb-5">English / français</p>
          <div className="flex gap-5">
            <a href="https://society6.com/femalesaint" target="_blank" rel="noreferrer" aria-label="Society6 shop" className="hover:opacity-60">
              <FaStoreAlt className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/female.saint/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:opacity-60">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="mailto:eve@locvm.ca" aria-label="Email" className="hover:opacity-60">
              <FaEnvelope className="h-5 w-5" />
            </a>
          </div>
        </div>
        <img
          className="no-copy-img w-full object-cover max-h-[340px]"
          src="https://res.cloudinary.com/dc2qd4mzh/image/upload/f_auto,q_auto/v1/EvePortfolio/Site%20Elements/kqao0431i4oldxjayu24"
          alt=""
        />
      </div>
      <p className="max-w-[1100px] mx-auto px-6 pt-4 pb-4 text-center mono border-t border-slate-700/15">
        © 2026 — Designed, coded, and created by Eve Seni
      </p>
    </section>
  );
};

export default ContactDivArt;
