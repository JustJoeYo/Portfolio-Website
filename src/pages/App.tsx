import { Navbar, FrontPageText } from "../components/types";
import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { About, Contact, Experience, Projects } from "./types";

export default function App() {
  const [showScene, setShowScene] = useState(true);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  interface AddEventListenerOptionsExtended extends AddEventListenerOptions {
    passive?: boolean;
  }

  const preventScroll = (e: Event) => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const options: AddEventListenerOptionsExtended = { passive: false };

    if (showScene) {
      // If showScene is true, prevent scrolling
      window.addEventListener("wheel", preventScroll, options);
    } else {
      // If showScene is false, allow scrolling
      window.removeEventListener("wheel", preventScroll, options);
    }

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("wheel", preventScroll, options);
    };
  }, [showScene]);

  return (
    <>
      <div className="!scroll-smooth overflow-y-scroll">
        <Element name="home">
          <div className="bg-black w-screen h-screen overflow-x-hidden flex flex-col justify-center items-center text-center">
            {!showScene && <Navbar />}

            <FrontPageText showScene={showScene} setShowScene={setShowScene} />
            {!showScene && showScrollIndicator && (
              <div className="absolute bottom-0 mb-4 flex flex-col items-center">
                <span className="text-white">Scroll</span>
                <span className="text-white text-4xl">&#8595;</span>{" "}
              </div>
            )}
          </div>
        </Element>

        {!showScene && (
          <>
            <Element name="about">
              <About />
            </Element>
            <Element name="projects">
              <Projects />
            </Element>
            <Element name="experience">
              <Experience />
            </Element>
            <Element name="contact">
              <Contact />
            </Element>
          </>
        )}
      </div>
    </>
  );
}
