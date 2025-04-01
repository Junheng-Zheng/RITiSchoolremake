//imports, css, any react state/hooks/other
// import React from 'react';
//React.useState()
import { useState, useEffect } from "react";
//import components

//navigation
import Navbar from "./components/navigation/Navbar.jsx";
import Sidenav from "./components/navigation/Sidenav.jsx";
import Footer from "./components/navigation/Footer.jsx";

//website sections
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Degrees from "./components/Degrees.jsx";
import Minors from "./components/Minors.jsx";
import Employment from "./components/Employment.jsx";
import People from "./components/People.jsx";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

//get my utils
import getData from "./util/GetData.js";

const App = () => {
  //set up my state vars
  //const [var, setVar] = useState(init);
  const [loadAbout, setLoadAbout] = useState(false);
  const [aboutObj, setAboutObj] = useState();
  const [employmentObj, setEmploymentObj] = useState();
  const [people, setPeople] = useState();
  const [loadingBar, SetLoadingBar] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const about = await getData("about/");
        console.log("About:", about);
        setAboutObj(about);
        SetLoadingBar(50);
        const people = await getData("people/");
        console.log("People:", people);
        setPeople(people);
        SetLoadingBar(100);
        const employment = await getData("employment/");
        console.log("Employment:", employment);
        setEmploymentObj(employment);

        setLoadAbout(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  if (!loadAbout)
    return (
      <div className="w-full h-[100vh] flex items-center justify-center flex-col">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex h-[20px] border border-gray-400 rounded-md w-[70%]">
            <div
              className="transition-all duration-1000 h-full bg-orange-500"
              style={{ paddingLeft: `${loadingBar}%` }}
            ></div>
          </div>
        </div>
      </div>
    );

  return (
    <>
      <Navbar />
      <Hero />
      <div className="relative h-fit gap-30 flex w-full px-3 py-3 sm:!py-10 sm:!px-35">
        <Sidenav />
        <section className="w-full gap-4 sm:!gap-7 flex flex-col justify-center">
          <About aboutObj={aboutObj} />
          <hr />
          <Degrees />
          <hr />
          <Minors />
          <hr />
          <Employment employmentObj={employmentObj} />
          <hr />
          <People peopleObj={people} />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default App;
