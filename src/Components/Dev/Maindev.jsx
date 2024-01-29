import React from "react";

const Maindev = ({ eveImage }) => {
  return (
    <div
      name="home"
      className="flex h-full lg:m-20 lg:flex-row md:flex-col sm:flex-col items-center justify-center mb-2 
      "
    >
      <div
        className=" flex lg:flex-row md:flex-col sm:flex-col flex-col h-5/6 w-5/6 pt-20 
     
      "
      >
        <div className="flex-1 h-full flex justify-center items-center">
          <img
            src={eveImage}
            alt=""
            className="rounded-full object-cover shadow-md imageEve mb-5"
          />
        </div>

        <div className=" flex-1 h-full flex  justify-center items-center lg:p-4 ">
          <div className="flex flex-col justify-center items-center m-3 w-full ">
            <h2 className="lg:pb-4 pb-2 mt-2 lg:text-xl md:text-lg sm:text-sm text-sm  text-slate-700">
              Hello, I'm
            </h2>
            <h1 className="lg:text-[3.3rem] md:text-5xl sm:text-5xl text-4xl text-slate-700">
              Ève Aimée Seni
            </h1>

            <div className=" flex justify-between items-center flex-col m-4 w-full md:w-3/4 lg:w-full ">
              <h2
                className="lg:text-2xl md:text-2xl sm:text-md text-lg mb-3 font-bold md:items-center sm:items-center 
              text-slate-400 bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent
              "
              >
                I'm a fullstack developer
              </h2>
              <div className="lg:text-md md:text-sm sm:text-sm text-sm mt-4  text-slate-700">
                <h2>
                  With a passion for art, culture and learning. I have a
                  background in history and teaching. My love for the past
                  colors all my creations.{" "}
                </h2>
                <h2 className="mt-2  text-slate-700">
                  Here you will find my projects, my skills, and everything
                  coding related. If you want to discover my paintings head to
                  the art section.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maindev;
