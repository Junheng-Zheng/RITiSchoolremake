import { useState, useEffect } from "react";

//import navigation
import Navbar from "./components/navigation/Navbar.jsx";
import Sidenav from "./components/navigation/Sidenav.jsx";
import Footer from "./components/navigation/Footer.jsx";

//import site content
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Degrees from "./components/Degrees.jsx";
import Minors from "./components/Minors.jsx";
import Employment from "./components/Employment.jsx";
import People from "./components/People.jsx";

//importing bootstrap and getdata.js
import "bootstrap/dist/css/bootstrap.min.css";
import getData from "./util/GetData.js";

const App = () => {
  const [loadAbout, setLoadAbout] = useState(false); //load state
  const [aboutObj, setAboutObj] = useState();
  const [degreeObj, setDegreeObj] = useState();
  const [minorObj, setMinorObj] = useState();
  const [courseObj, setCourseObj] = useState();
  const [employmentObj, setEmploymentObj] = useState();
  const [people, setPeople] = useState();
  const [loadingBar, SetLoadingBar] = useState(0);
  const [isSidenavFixed, setIsSidenavFixed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const about = await getData("about/"); //gets the about data
        setAboutObj(about);
        const degrees = await getData("degrees/"); //gets the degrees data
        setDegreeObj(degrees);
        console.log("degrees", degrees);
        const minors = await getData("minors/"); //gets the minors data
        console.log("minors", minors);
        setMinorObj(minors);
        const course = await getData("course/"); //gets the minors data
        setCourseObj(course);
        setMinorObj(minors);
        console.log(course);
        SetLoadingBar(50); // Set loading bar to 50
        const people = await getData("people/"); //gets the people data
        setPeople(people);
        SetLoadingBar(100); // Set loading bar to 100
        const employment = await getData("employment/"); //gets the employment data
        setEmploymentObj(employment);
        console.log(employment);

        setLoadAbout(true);
      } catch (error) {
        console.error("Error fetching data:", error); //returns an error if something goes wrong
      }
    };

    fetchData();
  }, []);

  //this use effect makes the side navigation bar stick to the top once it hits the top of the screen.
  useEffect(() => {
    const handleScroll = () => {
      const targetDiv = document.querySelector(".relative");
      const targetPosition = targetDiv.getBoundingClientRect().top;

      if (targetPosition <= 0) {
        setIsSidenavFixed(true);
      } else {
        setIsSidenavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //loading bar
  if (!loadAbout)
    return (
      <div className="w-full h-[100vh] flex overflow-y-scroll items-center justify-center flex-col">
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

  //actual content
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="relative h-fit gap-30 flex w-full px-3 py-3 sm:!py-10 sm:!px-35">
        <div className={`w-fit ${isSidenavFixed && "pr-30"}`}>
          <div
            className={`transition-all duration-100 w-fit ${
              isSidenavFixed ? "fixed top-10" : ""
            }`}
          >
            <Sidenav />
          </div>
        </div>
        <section className="w-full gap-4 sm:!gap-7 flex flex-col justify-center">
          <About aboutObj={aboutObj} />
          <hr />
          <Degrees degreeObj={degreeObj} />
          <Minors minorObj={minorObj} courseObj={courseObj} />
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
