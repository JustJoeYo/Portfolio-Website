import { useRef } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      if (form.current) {
        const emailInput = form.current.elements.namedItem(
          "user_email"
        ) as HTMLInputElement;

        const nameInput = form.current.elements.namedItem(
          "user_name"
        ) as HTMLInputElement;

        const messageInput = form.current.elements.namedItem(
          "message"
        ) as HTMLInputElement;

        if (emailInput.value === "" && !validateEmail(emailInput.value)) {
          return;
        }

        if (nameInput.value === "") {
          return;
        }

        if (messageInput.value === "") {
          return;
        }

        if (
          emailInput &&
          validateEmail(emailInput.value) &&
          nameInput &&
          messageInput
        ) {
          emailjs.sendForm(
            "service_22oumwe",
            "template_wmv4rts",
            form.current,
            {
              publicKey: "MEwy-SOJyWbfZzBnf",
            }
          );

          messageInput.value = "";
          emailInput.value = "";
          nameInput.value = "";
        }
      }
    } catch (error) {
      // handle error here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-black w-screen min-h-screen max-h-max overflow-x-hidden flex flex-col justify-center items-center text-center">
        <div className="sm:p-10 my-auto">
          <section className="mx-auto max-w-screen-xl md:rounded-md md:border md:shadow-lg">
            <div className="grid grid-cols-4 text-white lg:grid-cols-3 bg-blue-950">
              <div className="col-span-4 bg-blue-900 px-8 py-10 text-white md:col-span-2 md:border-r md:px-10 md:py-12 lg:col-span-1">
                <h2 className="mb-8 text-2xl font-black">Contact me</h2>
                <ul>
                  <li className="mb-6 flex items-start text-left">
                    <svg
                      className="shrink-0 mr-6 text-2xl text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
                      />
                    </svg>
                    <div>
                      <a
                        className="cursor-pointer font-serif text-base md:text-lg"
                        href="https://sendto:samerejoe@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        samerejoe@gmail.com
                      </a>
                      <span className="block text-xs uppercase">email</span>
                    </div>
                  </li>
                  <li className="my-6 flex items-center text-left">
                    <svg
                      className="shrink-0 mr-6 text-2xl text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                    <div>
                      <a
                        className="cursor-pointer font-serif text-base md:text-lg"
                        href="https://github.com/JustJoeYo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        JustJoeYo
                      </a>
                      <span className="block text-xs uppercase">Github</span>
                    </div>
                  </li>
                  <li className="my-6 flex items-center text-left">
                    <svg
                      className="shrink-0 mr-6 text-2xl text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838Zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388Zm-5.5 10.403h3.208V9.25H4.208v10.54ZM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <a
                        href="https://linkedin.com/in/joseph-samere-981a5b291/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif text-base md:text-lg"
                      >
                        Joseph Samere
                      </a>
                      <span className="block text-xs uppercase">LinkedIn</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="order-first col-span-4 max-w-screen-md px-8 py-10 md:order-last md:col-span-2 md:px-10 md:py-12">
                <h2 className="mb-8 text-2xl font-black mt-10">Get in touch</h2>
                <p className="mt-2 mb-4 font-sans text-sm tracking-normal">
                  Email me directly or use the form below to send me a message.
                </p>
                <form ref={form as any} onSubmit={sendEmail}>
                  <div className="md:col-gap-4 mb-5 grid md:grid-cols-2">
                    <input
                      className="col-span-1 bg-blue-950 border border-gray-400 text-center w-full border-b py-3 text-sm outline-none focus:border-b-2 focus:border-black"
                      type="name"
                      placeholder="Name"
                      name="user_name"
                    />
                    <input
                      className="col-span-1 bg-blue-950 border border-gray-400 text-center w-full border-b py-3 text-sm outline-none focus:border-b-2 focus:border-black"
                      type="email"
                      placeholder="Email"
                      name="user_email"
                    />
                  </div>
                  <textarea
                    className="mb-10 bg-blue-950 border border-gray-400 p-5 w-full resize-y whitespace-pre-wrap border-b py-3 text-sm outline-none focus:border-b-2 focus:border-black"
                    name="message"
                    aria-rowcount={6}
                    placeholder="content"
                    rows={6}
                  />
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="group flex cursor-pointer items-center rounded-xl bg-blue-600 px-8 py-4 text-center font-semibold leading-tight text-white"
                  >
                    {isSubmitting ? "Submitting..." : "Send"}
                    <svg
                      className="group-hover:ml-8 ml-4 transition-all"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14m-7-7l7 7-7 7"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
