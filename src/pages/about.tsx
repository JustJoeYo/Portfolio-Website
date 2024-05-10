import { useEffect, useState } from "react";

export function About() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const birthDate = new Date("2005-04-03");
    const now = new Date();
    const diff = now.getTime() - birthDate.getTime();
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    setAge(years);
  }, []);

  return (
    <>
      <div className="bg-white text-black w-screen min-h-screen max-h-max overflow-x-hidden flex flex-col justify-center items-center text-center">
        <div className="mx-auto max-w-lg px-4 py-20 lg:max-w-screen-lg">
          <div className="mb-10 flex flex-col items-center">
            <div className="mb-8 text-3xl font-medium leading-normal sm:text-4xl sm:leading-relaxed">
              About{" "}
              <span className="rounded-xl bg-blue-600 px-3 py-0.5 text-white">
                Me
              </span>
            </div>
            <div className="max-w-xl text-gray-500">
              I am a{" "}
              <span className="rounded-xl bg-blue-600 px-3 py-0.5 text-white">
                {age}
              </span>{" "}
              year old software engineer with a passion for building web
              applications.
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="mr-4">
              <div className="mt-8 text-xl font-medium md:mt-0 md:mb-8 md:text-2xl">
                Coding Journey
              </div>
              <div className="text-gray-500">
                Since 2019, I've delved into C++, C#, and C, initially creating
                video game mods and cheats. Recently, I've transitioned to web
                development, exploring new avenues in the field.
              </div>
            </div>
            <div className="mr-4">
              <div className="mt-8 text-xl font-medium md:mt-0 md:mb-8 md:text-2xl">
                Education
              </div>
              <div className="text-gray-500">
                I graduated high school online at{" "}
                <a
                  href="https://k12privateacademy.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  K12 Private Academy
                </a>
                , and am currently pursuing further computer science education
                online on{" "}
                <a
                  href="https://turing.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Turing
                </a>
              </div>
            </div>
            <div className="mr-4">
              <div className="mt-8 text-xl font-medium md:mt-0 md:mb-8 md:text-2xl">
                Residency
              </div>
              <div className="text-gray-500">
                I am a U.S. resident currently residing in Idaho.
              </div>
            </div>
            <div className="mr-4">
              <div className="mt-8 text-xl font-medium md:mt-0 md:mb-8 md:text-2xl">
                Hobbies
              </div>
              <div className="text-gray-500">
                In my spare time, I like to indulge in motorcycling, coding,
                videogames, swimming, jetskiing, and snowboarding.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
