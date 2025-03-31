//imports, css, any react state/hooks/other
// import React from 'react';
//React.useState()
import { useState, useEffect } from "react";
//import components
import BootAcc from "./components/BootAcc.jsx";
import PeopleTabs from "./components/PeopleTabs.jsx";
import Undergraduate from "./components/graduate.jsx";
import Graduate from "./components/graduate.jsx";
import Tables from "./components/Tables.jsx";
import Gridtable from "./components/Gridtable.jsx";
import "./custom.scss"; // Adjust the path if necessary
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JavaScript (includes Popper.js)

//get my utils
import getData from "./util/GetData.js"; // .js not required, just nice for human readability

const App = () => {
  //set up my state vars
  //const [var, setVar] = useState(init);
  const [loadAbout, setLoadAbout] = useState(false);
  const [aboutObj, setAboutObj] = useState();
  const [employmentObj, setEmploymentObj] = useState();
  const [people, setPeople] = useState();
  const [loadingBar, SetLoadingBar] = useState(0);
  useEffect(() => {
    getData("about/").then((json) => {
      console.log("worked", json);
      //load the data into the object
      setAboutObj(json);
      //flip the bit on loaded
    });
    getData("people/").then((json) => {
      console.log("peoplejson: ", json);
      setPeople(json);
      SetLoadingBar(100);
    });
    getData("employment/").then((json) => {
      console.log("employmentworked", json);
      //load the data into the object
      setEmploymentObj(json);
      //flip the bit on loaded
      setLoadAbout(true);
    });
  }, []);
  if (!loadAbout)
    return (
      <div className="w-full h-[100vh] flex items-center justify-center flex-col">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex h-[20px] border border-gray-400 rounded-md w-[70%]">
            <div
              className="transition-all duration-200 h-full bg-orange-500"
              style={{ paddingLeft: `${loadingBar}%` }}
            ></div>
          </div>
        </div>
      </div>
    );

  return (
    <div>
      {console.log(
        `employers: ${employmentObj.coopTable.coopInformation[0].employer}`
      )}
      <div className="flex justify-between bg-black text-white">
        <div className="w-full py-2 px-10 flex font-semibold uppercase gap-3 items-center text-sm">
          <button>Iste 340</button>
          <button>Junheng Zheng</button>
          <button>Project 2</button>
        </div>
        <div className=" bg-orange-500 px-10 py-2 items-center text-nowrap font-semibold flex justify-end text-sm uppercase">
          <button>iSchool Remake</button>
        </div>
      </div>
      <div className="border-b border-gray-200 flex z-200 justify-between py-4 px-10 bg-white text-black items-center">
        <div className="flex w-full gap-2">
          <img
            className="w-[15%] object-contain"
            src="https://www.rit.edu/brandportal/sites/rit.edu.brandportal/files/inline-images/new_RIT_logo1_RGB_0.png"
          />
          <p className="m-0 px-2 border-l leading-none font-bold w-[40%] border-black ">
            Rochester Institute of Technology
          </p>
        </div>
        <div className="justify-center w-full items-center flex flex-col gap-2">
          <p className="m-0 font-bold leading-none text-md">
            Golisano College of
          </p>
          <p className="m-0 font-bold text-nowrap leading-none text-[27px]">
            Computing and Information Sciences
          </p>
        </div>
        <div className="m-0 text-sm font-bold flex gap-4 w-full items-center justify-end">
          <button>Github</button>
          <button>LinkedIn</button>
        </div>
      </div>
      <div className="">
        <div className="w-full h-fit py-10 flex items-center text-white">
          <div className="bg-orange-500 px-50 w-fit h-[275px] flex gap-1 flex-col justify-center items-start">
            <p className="text-[40px] font-normal leading-none m-0">
              School of
            </p>
            <p className="m-0 font-bold text-[45px] leading-none">
              Information
            </p>
          </div>
          <img
            className="w-[45%]"
            src="https://www.rit.edu/computing/sites/rit.edu.computing/files/images/paragraph/banner-item-2/schoolofinfo.jpg"
          />
          <div className="bg-orange-500 flex-grow h-[275px] py-20"></div>
        </div>
        {/* <div className="flex">
          <div className="w-full flex flex-col justify-center p-8">
            <h1 className="text-[50px] uppercase font-bold leading-none">
              {aboutObj.title}
            </h1>
            <h6>{aboutObj.description}</h6>
            <div className="text-sm text-gray-600">"{aboutObj.quote}"</div>
            <h5 className="w-full text-right text-gray-600 text-sm">
              -{aboutObj.quoteAuthor}
            </h5>
            <div className="py-3 px-8 text-white bg-orange-500 w-fit rounded-[20px] overflow-hidden">
              View Degrees
            </div>
          </div>
          <div className="flex-grow">
            <img
              className="h-full"
              src="https://www.rit.edu/sites/rit.edu/files/styles/full/https/cdn.rit.edu/images/news/2020-09/aerial_drone_09-web.jpg?itok=LbgHFYjL"
            />
          </div>
        </div> */}
        <p className="px-35 text-sm text-gray-600 font-light margin-0">
          <strong className="text-black">
            RIT / Golisano College of Computing and Information Sciences /
            Academics / Departments and Schools /
          </strong>
          <em> </em>School of Information
        </p>
        <div className="relative py-10 gap-30 flex w-full px-35">
          <div className="flex-start w-fit flex flex-col gap-4 items-start text-[21px] font-semibold text-gray-600 sticky top-0">
            <button className="hover:text-orange-500">About</button>
            <button className="hover:text-orange-500">Degrees</button>
            <button className="hover:text-orange-500">Minors</button>
            <button className="hover:text-orange-500">Employment</button>
            <button className="hover:text-orange-500">People</button>
          </div>
          <div>
            <div className="w-full gap-7 flex flex-col justify-center">
              <h1>About</h1>
              <h2 className="px-2 border-l-3 border-orange-500 m-0 text-[20px]">
                {aboutObj.title}
              </h2>
              <p className="font-light m-0">{aboutObj.description}</p>
              <p className="m-0 text-sm text-gray-600">
                "{aboutObj.quote}" -{aboutObj.quoteAuthor}
              </p>
              <h1>Degrees</h1>
              <h2 className="px-2 border-l-3 border-orange-500 m-0 text-[20px]">
                Undergraduate Programs
              </h2>
              <p className="m-0 font-light">
                Home to the college’s Bachelor of Science degrees in computing
                and information technologies, human-centered computing, and web
                and mobile computing, the iSchool comprises the “full stack”
                computing knowledge that prepares professionals working on both
                the front- and back-end of the user experience.
              </p>
              <Undergraduate />
              <h2 className="px-2 border-l-3 border-orange-500 m-0 text-[20px]">
                Graduate Programs
              </h2>
              <p className="m-0 font-light">
                A Master of Science Degree from the School of Information
                provides an opportunity for in-depth study to prepare for
                today’s high-demand computing careers. Big data is not just high
                transaction volumes; it is also data in various formats, with
                high velocity change, and increasing complexity and information
                delivery must be immediate and on demand.
              </p>
              <Graduate />
              <hr></hr>
              <h1>Minors</h1>
              <h2 className="px-2 border-l-3 border-orange-500 m-0 text-[20px]">
                Undergraduate Minors
              </h2>
              <Graduate />
              <hr></hr>
              <h1>Employment</h1>
              <h2 className="px-2 border-l-3 border-orange-500 text-[21px] m-0 font-bold">
                Academic excellence equals career performance
              </h2>
              <p className="text-gray-600 font-light m-0">
                iSchool graduates are heavily sought after by the professional
                tech industry. This is by design. We’ve been building
                relationships with employers for over 2 decades by continuously
                producing high caliber graduates. RIT’s reputation extends
                beyond Rochester, with 95% of our students landing a job within
                the first 6 months after graduation. It’s not uncommon for
                students to have offers before they even leave RIT.
              </p>
              <h2 className="px-2 border-l-3 border-orange-500 text-[21px] m-0 font-bold">
                Cooperative Education
              </h2>
              <p className="text-gray-600 font-light m-0">
                Cooperative education experiences, or co-ops, are an opportunity
                for students to build on their classroom skills in a real world
                environment. Co-ops are more than just an internship. Students
                get paid to work alongside industry professionals in leading
                tech companies, learning on the job and assisting with actual
                company projects. All undergraduate students are required to
                take 2 co-ops prior to graduation. Students typically take a
                co-op during their sophomore or junior year. For more
                information about co-ops, including course prerequisites and how
                to enroll in a co-op, please refer to our resources page.
              </p>
              <div className="flex justify-between items-start gap-10">
                <div className="w-full flex flex-col gap-1">
                  <p className="text-[32px] m-0 text-orange-500">$80,000</p>
                  <p className="m-0 font-light text-sm">
                    Average salary with one of our degrees (glassdoor.com)
                  </p>
                </div>
                <div className="w-full flex flex-col gap-1">
                  <p className="text-[32px] m-0 text-orange-500">36th</p>
                  <p className="m-0 font-light text-sm">
                    Rank among the Top 50 Best Computing Colleges in the U.S.
                    (businessinsider.com)
                  </p>
                </div>
                <div className="w-full flex flex-col gap-1">
                  <p className="text-[32px] m-0 text-orange-500">35</p>
                  <p className="m-0 font-light text-sm">
                    Percent of all of the web traffic used by mobile devices in
                    the U.S. (thenextweb.com)
                  </p>
                </div>
                <div className="w-full flex flex-col gap-1">
                  <p className="text-[32px] m-0 text-orange-500">
                    1.11 Billion GB
                  </p>
                  <p className="m-0 font-light text-sm">
                    Information in the form of internet traffic in 24 hours
                    (mbaonline.com)
                  </p>
                </div>
              </div>
              <h2 className="px-2 border-l-3 border-orange-500 text-[21px] m-0 font-bold">
                Careers
              </h2>
              <div className="flex items-center gap-3">
                <div className="text-white px-3 py-2 bg-orange-500">
                  <p className="m-0 text-sm">RIT Libraries</p>
                </div>
                <div className="text-white px-3 py-2 bg-orange-500">
                  <p className="m-0 text-sm">Parlec Inc</p>
                </div>
                <div className="text-white px-3 py-2 bg-orange-500">
                  <p className="m-0 text-sm">TigerSafe</p>
                </div>
                <div className="text-white px-3 py-2 bg-orange-500">
                  <p className="m-0 text-sm">CommVault</p>
                </div>
                <div className="text-white px-3 py-2 bg-orange-500">
                  <p className="m-0 text-sm">Liberty Pump</p>
                </div>
                <div className="text-white px-3 py-2 bg-orange-500">
                  <p className="m-0 text-sm">Alit</p>
                </div>
              </div>
              <h2 className="px-2 border-l-3 border-orange-500 text-[21px] m-0 font-bold">
                Employers
              </h2>
              <div className="flex items-center gap-3">
                <div className="text-white px-3 py-2 bg-orange-500">
                  <p className="m-0 text-sm">RIT Libraries</p>
                </div>
                <div className="text-white px-3 py-2 bg-orange-500">
                  <p className="m-0 text-sm">Parlec Inc</p>
                </div>
                <div className="text-white px-3 py-2 bg-orange-500">
                  <p className="m-0 text-sm">TigerSafe</p>
                </div>
                <div className="text-white px-3 py-2 bg-orange-500">
                  <p className="m-0 text-sm">CommVault</p>
                </div>
                <div className="text-white px-3 py-2 bg-orange-500">
                  <p className="m-0 text-sm">Liberty Pump</p>
                </div>
                <div className="text-white px-3 py-2 bg-orange-500">
                  <p className="m-0 text-sm">Alit</p>
                </div>
              </div>
              {/* <Tables /> */}
              {/* <BootAcc /> */}
              <h2 className="px-2 border-l-3 border-orange-500 text-[21px] m-0 font-bold">
                See the Statistics
              </h2>
              <Gridtable data={employmentObj} />
              <h1>People</h1>
              <PeopleTabs data={people} />
            </div>
          </div>
        </div>
        <footer className="flex flex-col w-full bg-black text-white">
          <div className="flex flex-col gap-2 w-full items-center justify-center p-3 border-b border-gray-700">
            <p className="m-0">RIT iSchool</p>
            <p className="m-0 text-sm">Created by Junheng Zheng</p>
          </div>
          <div className="p-3 text-center">
            <p className="m-0 text-sm">
              Copyright © Rochester Institute of Technology. All Rights
              Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
