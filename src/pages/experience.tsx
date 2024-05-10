import { Reveal } from "../components/types";

export function Experience() {
  return (
    <>
      <div className="bg-white text-black w-screen min-h-screen max-h-max overflow-x-hidden flex flex-col justify-center items-center text-center self-center">
        <Reveal children={<h1 className="text-4xl font-bold">Experience</h1>} />
        <Reveal
          children={<p className="mt-4 text-lg">My coding experience.</p>}
        />
        <div className="flex flex-col items-center">
          <iframe
            src="https://github-profile-trophy.vercel.app/?username=justjoeyo"
            className="mt-4 self-center"
            title="Profile Trophy"
            width="800"
            height="100"
            style={{ border: 0 }}
          />
          <iframe
            src="https://github-readme-stats.vercel.app/api/top-langs?username=justjoeyo&show_icons=true&locale=en&layout=compact"
            className="mt-4 self-center"
            title="Most Used Languages"
            width="400"
            height="200"
            style={{ border: 0 }}
          />
          <Reveal children={<h3 className="">Languages and Tools:</h3>} />
          <p className="flex flex-grid self-center">
            {" "}
            <a
              href="https://developer.android.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg"
                alt="android"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                alt="aws"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.cprogramming.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                alt="c"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.w3schools.com/cpp/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                alt="cplusplus"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.w3schools.com/cs/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
                alt="csharp"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                alt="docker"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://expressjs.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="express"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                alt="firebase"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://cloud.google.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
                alt="gcp"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                alt="mysql"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.photoshop.com/en"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
                alt="photoshop"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://reactnative.dev/img/header_logo.svg"
                alt="reactnative"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="typescript"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://unity.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg"
                alt="unity"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://unrealengine.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg"
                alt="unreal"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
          </p>
          <Reveal
            children={
              <h1 className="mt-4 w-screen">
                In my early career, I specialized in C++, C#, and C for
                videogame modding, but I have transitioned towards frontend and
                backend web development over the past two years. While I possess
                a diverse skill set encompassing various programming languages,
                I am deeply committed to continuous learning and expanding my
                expertise. My professional ethos revolves around consistently
                seeking innovative problem-solving strategies and mastering new
                programming languages.
              </h1>
            }
          />

          <button className="mt-4 mb-5 rounded-lg w-max self-center bg-blue-700 px-6 py-2 text-white transition hover:translate-y-1">
            <Reveal
              children={
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/portfoliowebsite-28db9.appspot.com/o/resume.pdf?alt=media&token=e097576f-8e3c-4636-8521-72ceb273eaef"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              }
            />
          </button>
        </div>
      </div>
    </>
  );
}
