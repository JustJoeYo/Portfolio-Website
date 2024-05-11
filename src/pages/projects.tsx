export function Projects() {
  return (
    <>
      <div className="bg-black w-screen min-h-screen max-h-max overflow-x-hidden flex flex-col justify-center items-center text-center">
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,900&display=swap"
          rel="stylesheet"
        />

        <section className="mx-auto max-w-screen-xl py-6 text-blue-900 sm:py-16 lg:py-12">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl xl:text-5xl">
                My Top Projects
              </h2>
              <hr className="mx-auto mt-6 h-2 w-32 border-none bg-blue-900" />
            </div>

            <div className="mt-5 grid grid-cols-1 gap-10 text-center sm:mx-auto sm:max-w-sm md:mt-10 md:max-w-full md:text-left">
              <div className="md:flex">
                <img
                  className="mx-auto md:mr-0 h-48 object-contain md:order-2 md:object-right"
                  src="https://opengraph.githubassets.com/e1a71eb46f70f95ebd68f856e04c011af69cffbf87b89d3b91705cf747d1f36c/JustJoeYo/StellarInsight"
                  alt=""
                />
                <div className="">
                  <h3 className="text-4xl">StellarInsight</h3>
                  <p className="mt-6 text-base text-white">
                    A project to showcase my skills and my fullstack
                    capabilities. This project uses AI to coach players, shows
                    detailed statistics, and more.
                  </p>
                  <button className="mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white transition hover:translate-y-1">
                    <a
                      href="https://github.com/JustJoeYo/StellarInsight"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Github
                    </a>
                  </button>
                  <button className="mt-4 ml-5 rounded-lg bg-blue-700 px-6 py-2 text-white transition hover:translate-y-1">
                    <a
                      href="https://catnip.solutions/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Site
                    </a>
                  </button>
                </div>
              </div>

              <div className="md:flex">
                <img
                  className="mx-auto md:mr-0 h-48 object-contain md:order-2 md:object-right"
                  src="https://opengraph.githubassets.com/fd5748ea3ed96b336f923f4212fae8b99119c1f55eb6b8819d79b3d8af3f294a/JustJoeYo/catnip.solutions"
                  alt=""
                />
                <div className="">
                  <h3 className="text-4xl">Catnip.Solutions</h3>
                  <p className="mt-3 text-base text-white">
                    Point of Sale website with random features/ideas. Built out
                    of passion for learning how to make secure
                    authentication/checkout/databases.
                  </p>
                  <button className="mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white transition hover:translate-y-1">
                    <a
                      href="https://github.com/JustJoeYo/catnip.solutions/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Github
                    </a>
                  </button>
                  <button className="mt-4 ml-5 rounded-lg bg-blue-700 px-6 py-2 text-white transition hover:translate-y-1">
                    <a
                      href="https://catnip.solutions/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Site
                    </a>
                  </button>
                </div>
              </div>

              <div className="md:flex">
                <img
                  className="mx-auto md:mr-0 h-48 object-contain md:order-2 md:object-right"
                  src="https://opengraph.githubassets.com/da3e9fccd3a5e6da4534ecdc16884cd7295f7d974ef6bede7d14c3a1a3334216/JustJoeYo/Portfolio-Website"
                  alt=""
                />
                <div className="">
                  <h3 className="text-4xl">Portfolio Website</h3>
                  <p className="mt-6 text-base text-white">
                    This websites source code! Built with TailwindCSS, React,
                    Vite, TypeScript, & Firebase.
                  </p>
                  <button className="mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white transition hover:translate-y-1">
                    <a
                      href="https://github.com/JustJoeYo/Portfolio-Website/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Github
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
