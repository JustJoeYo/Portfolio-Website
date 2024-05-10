import { useState, useEffect } from "react";
import Scene from "./scene";
import { TypeAnimation } from "react-type-animation";

interface FrontPageTextProps {
  showScene: boolean;
  setShowScene: (showScene: boolean) => void;
}

export const FrontPageText: React.FC<FrontPageTextProps> = ({
  showScene,
  setShowScene,
}) => {
  const [showSecondAnimation, setShowSecondAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScene(false);
    }, 2750);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showScene) {
      const timer = setTimeout(() => {
        setShowSecondAnimation(true);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [showScene]);

  return (
    <>
      {showScene ? (
        <Scene />
      ) : (
        <>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-black h-max w-max p-3 cursor-default">
              <h1 className="flex items-center">
                <span className="text-green-600 text-[0.875em]">{"<h1> "}</span>
                <TypeAnimation
                  sequence={["i'm joseph samere and i'm a"]}
                  wrapper="span"
                  speed={25}
                  style={{ fontSize: ".875em", display: "inline-block" }}
                  repeat={1}
                />
                <span className="text-green-600 text-[0.875em]">{"</h1>"}</span>
              </h1>
            </div>
            {showSecondAnimation && (
              <div className="bg-black h-max w-max p-3 cursor-default mt-4">
                <h2 className="flex items-center">
                  <span className="text-blue-600 text-[1em]">{"<h2>"}</span>
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "full stack developer",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      "ui designer",
                      1000,
                      "memory maniputator",
                      1000,
                      "coding enthusiast",
                      1000,
                    ]}
                    wrapper="span"
                    speed={10}
                    style={{ fontSize: "1em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                  <span className="text-blue-600 text-[1em]">{"</h2>"}</span>
                </h2>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
