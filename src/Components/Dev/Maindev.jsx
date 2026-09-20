import { identity, engineering } from "../../data/journey";

const { scale } = engineering;

const Maindev = ({ eveImage }) => {
  return (
    <div
      name="home"
      className="flex h-full lg:m-20 lg:flex-row md:flex-col sm:flex-col items-center justify-center mb-2"
    >
      <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col h-5/6 w-5/6 pt-20">
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
            <h1 className="lg:text-6xl md:text-5xl sm:text-5xl text-4xl text-slate-700">
              Ève Aimée Seni
            </h1>

            <div className=" flex justify-between items-center flex-col m-4 w-full md:w-3/4 lg:w-full ">
              <h2
                className="lg:text-2xl md:text-2xl sm:text-md text-lg mb-3 font-bold md:items-center sm:items-center 
              text-slate-400 bg-linear-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent
              "
              >
                {identity.role} at {identity.company}
              </h2>
              <div className="text-sm md:text-base lg:text-lg mt-4  text-slate-700">
                <p>
                  I build{" "}
                  <a
                    href={identity.links.site}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold underline decoration-bluegreen underline-offset-4 hover:text-bluegreen"
                  >
                    {identity.company}
                  </a>
                  , a healthcare locum marketplace for Canada. Physicians and clinics
                  match on specialty, location, availability and EMR, so clinics
                  get verified coverage faster and physicians choose work on
                  their own terms.
                </p>
                <p className="mt-2  text-slate-700">
                  Solo first commit in August 2024. Today it's{" "}
                  {Math.round(scale.linesOfCode / 1000)}k lines of code,{" "}
                  {scale.taggedReleases} releases, an official locum resource of
                  the Ontario Medical Association, and live in two provinces.
                </p>
                <p className="mt-2  text-slate-700">
                  Before that: fullstack developer, ancient historian, teacher,
                  painter. My love for the past colours everything I make.
                  Projects and skills are below; the paintings live in the art
                  section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maindev;
