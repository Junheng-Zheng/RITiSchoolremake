import React from "react";
import DegreeAcc from "./degreeComponents/DegreeAcc";

//Degrees section
const Degrees = ({ degreeObj }) => {
  //my own text, everything from degree api is in degree accordians
  return (
    <div className="w-full gap-4 sm:!gap-7 flex flex-col justify-center">
      <h1 id="degrees">Degrees</h1>
      <h2 className="px-2 border-l-3 border-orange-500 m-0 text-[20px]">
        Undergraduate Programs
      </h2>
      <p className="m-0 font-light">
        Home to the college’s Bachelor of Science degrees in computing and
        information technologies, human-centered computing, and web and mobile
        computing, the iSchool comprises the “full stack” computing knowledge
        that prepares professionals working on both the front- and back-end of
        the user experience.
      </p>
      <DegreeAcc degreeObj={degreeObj.undergraduate} />
      <h2 className="px-2 border-l-3 border-orange-500 m-0 text-[20px]">
        Graduate Programs
      </h2>
      <p className="m-0 font-light">
        A Master of Science Degree from the School of Information provides an
        opportunity for in-depth study to prepare for today’s high-demand
        computing careers. Big data is not just high transaction volumes; it is
        also data in various formats, with high velocity change, and increasing
        complexity and information delivery must be immediate and on demand.
      </p>
      <DegreeAcc degreeObj={degreeObj.graduate} />
    </div>
  );
};

export default Degrees;
