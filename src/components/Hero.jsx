import React from "react";

//just a hero section for the website
const Hero = () => {
  return (
    <>
      <div className="w-full h-fit py-3 pb-0 sm:!py-10 flex-col-reverse flex sm:flex-row items-center text-white">
        <div className="w-full flex justify-center sm:block sm:w-fit">
          <div className="bg-orange-500 px-3 sm:!px-50 w-[90%] sm:w-fit -translate-y-[20px] sm:translate-y-[0px] h-[80px] sm:h-[275px] flex gap-1 flex-col justify-center items-start">
            <p className="text-lg sm:text-[40px] font-normal leading-none m-0">
              School of
            </p>
            <p className="text-xl m-0 font-bold sm:text-[45px] leading-none">
              Information
            </p>
          </div>
        </div>
        <img
          className="w-full sm:w-[45%]"
          src="https://www.rit.edu/computing/sites/rit.edu.computing/files/images/paragraph/banner-item-2/schoolofinfo.jpg"
        />
        <div className="bg-orange-500 hidden sm:flex-grow sm:flex h-[275px] py-20"></div>
      </div>
      <p className="hidden sm:block px-35 text-sm text-gray-600 font-light margin-0">
        <strong className="text-black">
          RIT / Golisano College of Computing and Information Sciences /
          Academics / Departments and Schools /
        </strong>
        <em> </em>School of Information
      </p>
    </>
  );
};

export default Hero;
