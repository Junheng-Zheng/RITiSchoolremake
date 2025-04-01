import React from "react";

//The about section of the project
const About = ({ aboutObj }) => {
  return (
    <div className="w-full gap-4 sm:!gap-7 flex flex-col justify-center">
      <h1 id="about">About</h1>
      <h2 className="px-2 border-l-3 border-orange-500 m-0 text-[20px]">
        {aboutObj.title}
      </h2>
      <p className="font-light m-0">{aboutObj.description}</p>
      <p className="m-0 text-sm text-gray-600">
        "{aboutObj.quote}" -{aboutObj.quoteAuthor}
      </p>
    </div>
  );
};

export default About;
