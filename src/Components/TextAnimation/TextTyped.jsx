import React, { useEffect } from "react";
import Typed from "typed.js";
import "./TextAnimation.css";

const TextTyped = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["a fullstack developer", "also an artist."],
      typeSpeed: 60,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="anim-wrapper mt-5 ">
      <h1 className="text-anim text-2xl md:4xl">
        I'm <span className="h1-anim" ref={el}></span>
      </h1>
    </div>
  );
};

export default TextTyped;
