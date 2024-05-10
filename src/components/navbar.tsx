import { Events, Link as ScrollLink, scrollSpy } from "react-scroll";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { createRef, useEffect, useMemo, useState } from "react";
import { isMobile } from "react-device-detect";
function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navigation = useMemo(
    () => [
      { name: "Home" },
      { name: "About" },
      { name: "Projects" },
      { name: "Experience" },
      { name: "Contact" },
    ],
    []
  );

  const [bgColor, setBgColor] = useState("bg-white");
  const [textColor, setTextColor] = useState("text-black");

  const [sectionRefs, setSectionRefs] = useState([]);

  useEffect(() => {
    setSectionRefs((refs) =>
      Array(navigation.length)
        .fill(0)
        .map((_, i) => refs[i] || createRef())
    );
  }, [navigation]);

  useEffect(() => {
    scrollSpy.update();

    Events.scrollEvent.register("begin", function (to: string) {
      const index = navigation.findIndex(
        (item) => item.name.toLowerCase() === to
      );

      if (index % 2 === 0) {
        setBgColor("bg-white");
        setTextColor("text-black");
      } else {
        setBgColor("bg-black");
        setTextColor("text-white");
      }
    });

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, [navigation]);

  return (
    <>
      {isMobile ? (
        <Disclosure
          as="nav"
          className="fixed top-0 z-50 flex justify-center self-center w-full"
        >
          {({ open }) => (
            <>
              <div className="absolute top-5 left-5 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:popclr hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <Disclosure.Panel className="sm:hidden bg-neutral-200 w-screen h-screen py-16 px-5">
                <div className="px-2 pt-2 pb-3 flex flex-col gap-1">
                  {navigation.map((item) => (
                    <ScrollLink
                      key={item.name}
                      to={item.name.toLowerCase()}
                      smooth
                      duration={500}
                      className={`px-3 w-full py-2 rounded-md text-base font-medium flex text-black`}
                    >
                      <Disclosure.Button>{item.name}</Disclosure.Button>
                    </ScrollLink>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ) : (
        <Disclosure
          as="nav"
          className="fixed top-0 z-50 flex justify-center self-center w-full"
        >
          <>
            <div
              className={`hidden sm:block absolute top-10 p-3 rounded-3xl ${bgColor} ${textColor}`}
            >
              <div className="flex space-x-4">
                {navigation.map((item, index) => (
                  <ScrollLink
                    key={item.name}
                    ref={sectionRefs[index]}
                    to={item.name.toLowerCase()}
                    smooth
                    duration={500}
                    className={classNames(
                      "p-2 rounded-md text-sm font-medium cursor-pointer"
                    )}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </div>
            </div>
          </>
        </Disclosure>
      )}
    </>
  );
}
