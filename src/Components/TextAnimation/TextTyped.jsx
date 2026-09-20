import React, { useEffect } from "react";
import Typed from "typed.js";
import "./TextAnimation.css";

const TextTyped = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["a startup founder", "a fullstack developer", "also an artist."],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="anim-wrapper mt-5 ">
      <h1 className="text-anim text-2xl md:4xl">
        I'm <span className="h1-anim" ref={el}>a startup founder</span>
      </h1>
    </div>
  );
};

export default TextTyped;
