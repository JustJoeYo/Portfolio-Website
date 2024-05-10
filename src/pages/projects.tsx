export function Projects() {
  return (
    <>
      <div className="bg-black w-screen min-h-screen max-h-max overflow-x-hidden flex flex-col justify-center items-center text-center">
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,900&display=swap"
          rel="stylesheet"
        />

        <section className="mx-auto max-w-screen-xl py-12 text-blue-900 sm:py-16 lg:py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium text-blue-700">INTRODUCING</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl xl:text-5xl">
                The Future of Analytics
              </h2>
              <hr className="mx-auto mt-6 h-2 w-32 border-none bg-blue-900" />
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 text-center sm:mx-auto sm:max-w-sm md:mt-20 md:max-w-full md:text-left">
              <div className="md:flex">
                <img
                  className="mx-auto md:mr-0 h-56 object-contain md:order-2 md:object-right"
                  src="/images/y4CZSruoLgKdA6Y6mzQnT.png"
                  alt=""
                />
                <div className="">
                  <h3 className="text-4xl">Have deeper insights</h3>
                  <p className="mt-6 text-base text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa ipsa delectus quod?
                  </p>
                  <button className="mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white transition hover:translate-y-1">
                    Learn more
                  </button>
                </div>
              </div>

              <div className="md:flex">
                <img
                  className="mx-auto md:mr-0 h-56 object-contain md:order-2 md:object-right"
                  src="/images/J-zIQVi8blFhyA3me_Igi.png"
                  alt=""
                />
                <div className="">
                  <h3 className="text-4xl">Get advantage over others</h3>
                  <p className="mt-6 text-base text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa ipsa delectus quod?
                  </p>
                  <button className="mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white transition hover:translate-y-1">
                    Learn more
                  </button>
                </div>
              </div>

              <div className="md:flex">
                <img
                  className="mx-auto md:mr-0 h-56 object-contain md:order-2 md:object-right"
                  src="/images/6SD_s9DepFaNBNOeFKeoG.png"
                  alt=""
                />
                <div className="">
                  <h3 className="text-4xl">Recover lost revenue</h3>
                  <p className="mt-6 text-base text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa ipsa delectus quod?
                  </p>
                  <button className="mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white transition hover:translate-y-1">
                    Learn more
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
