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
  const [degreeObj, setDegreeObj] = useState();
  const [employmentObj, setEmploymentObj] = useState();
  const [people, setPeople] = useState();
  const [loadingBar, SetLoadingBar] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const about = await getData("about/");
        console.log("About:", about);
        setAboutObj(about);
        const degrees = await getData("degrees/");
        console.log("Degrees: ", degrees);
        setDegreeObj(degrees);
        SetLoadingBar(50); //sets loading bar to 50
        const people = await getData("people/");
        console.log("People:", people);
        setPeople(people);
        SetLoadingBar(100); //sets loading bar to 100
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
    //loading while fetching data.
    return (
      <div className="w-full h-[100vh] flex items-center justify-center flex-col">
        <Navbar className="absolute top-0" />
        <div className="w-[70%] flex flex-col gap-1 items-center justify-center">
          <p className="m-0 uppercase font-bold w-full">Loading...</p>
          <div className="flex overflow-hidden h-[20px] border border-gray-400 rounded-md w-full">
            <div
              className="transition-all duration-1000 h-full bg-orange-500"
              style={{ paddingLeft: `${loadingBar}%` }}
            ></div>
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="relative h-fit gap-30 flex w-full px-3 py-3 sm:!py-10 sm:!px-35">
        <Sidenav />
        <section className="w-full gap-4 sm:!gap-7 flex flex-col justify-center">
          <About aboutObj={aboutObj} />
          <hr />
          <Degrees degreeObj={degreeObj} />
          <Minors />
          <hr />
          <Employment employmentObj={employmentObj} />
          <hr />
          <People peopleObj={people} />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
