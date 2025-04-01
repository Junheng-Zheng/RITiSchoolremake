import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="hidden sticky z-500 top-0 sm:flex justify-between bg-black text-white">
        <div className="w-full py-2 px-10 flex font-semibold uppercase gap-3 items-center text-sm">
          <button>Iste 340</button>
          <button>Junheng Zheng</button>
          <button>Project 2</button>
        </div>
        <div className=" bg-orange-500 px-10 py-2 items-center text-nowrap font-semibold flex justify-end text-sm uppercase">
          <p className="m-0">iSchool Remake</p>
        </div>
      </div>
      <div className="border-b border-gray-200 flex-col sm:flex-row flex z-200 justify-between sm:py-4 sm:px-10 bg-white text-black items-center">
        <div className="flex justify-center sm:justify-start p-3 border-b border-gray-300 sm:border-0 sm:p-0 w-full gap-2">
          <img
            className="w-[15%] object-contain"
            src="https://www.rit.edu/brandportal/sites/rit.edu.brandportal/files/inline-images/new_RIT_logo1_RGB_0.png"
          />
          <p className="hidden sm:block m-0 px-2 border-l leading-none font-bold w-[40%] border-black ">
            Rochester Institute of Technology
          </p>
        </div>
        <div className="hidden justify-center w-full items-center sm:flex flex-col gap-2">
          <p className="m-0 font-bold leading-none text-md">
            Golisano College of
          </p>
          <p className="m-0 font-bold text-nowrap leading-none text-[27px]">
            Computing and Information Sciences
          </p>
        </div>
        <div className="m-0 text-sm font-bold hidden sm:flex gap-4 w-full items-center justify-end">
          <button>Github</button>
          <button>LinkedIn</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
