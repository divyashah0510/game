import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Timeline from "./page/Timeline";
import Review from "./page/Review";

const imagesItems = [
  <img className="h-full w-full" src="/images/yoda-1.jpg" alt="teste" />,
  <img className="h-full w-full" src="/images/yoda-2.jpg" alt="teste" />,
  <img className="h-full w-full" src="/images/yoda-3.jpg" alt="teste" />,
  <img className="h-full w-full" src="/images/yoda-4.jpg" alt="teste" />,
  <img className="h-full w-full" src="/images/yoda-5.jpg" alt="teste" />,
];

const About = () => {
  return (
    <div className="bg-transparent">
      {/* Header Section */}
      <header className="bg-transparent text-white text-center py-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl leading-loose homeGlow bg-transparent">
          Balance Yoda
        </h1>
      </header>

      {/* Information Section */}
      <div className="bg-transparent py-24 sm:py-5 ">
        <div className="mx-auto px-6 lg:px-8 bg-transparent">
          <div className="mx-auto max-w-2xl lg:text-center bg-transparent">
            <h2 className="text-lg font-bold p-3 leading-7 text-green-600 bg-transparent">
              Join Us Today
            </h2>
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-white homeGlow bg-transparent ">
              Everything you need to play this game
            </p>
            <p className="mt-9 text-lg leading-8 text-gray-400 bg-transparent">
              Discover your path to greatness. Get valuable insights and
              strength through our offerings. The support you need is within
              you. Embrace it. Elevate your experience with our community.
            </p>
          </div>

          <div className="mx-auto mt-6 max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-7xl bg-transparent">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 bg-transparent">
              <div className="relative pl-16 bg-transparent">
                <dt className="text-base font-semibold leading-7 text-green-800 shadow-green-200 bg-transparent">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 ">
                    <svg
                      className="h-6 w-6 bg-transparent"
                      fill="rgb(22 163 74)"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </div>
                  Wise Wisdom
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400 bg-transparent">
                  Knowledge, you seek. Tellus semper adipiscing, the path to
                  enlightenment it reveals. Suspendisse semper morbi, wisdom it
                  imparts. Odio urna massa, a Yoda you become.
                </dd>
              </div>
              <div className="relative pl-16 bg-transparent">
                <dt className="text-base font-semibold leading-7 text-green-800 shadow-green-200 bg-transparent">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <svg
                      className="h-6 w-6 bg-transparent"
                      fill="rgb(22 163 74)"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  Journey of Discovery
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400 bg-transparent">
                  Discover your path, you will. Sit quis amet rutrum, a world of
                  possibilities it unfolds. Ullamcorper ultricies libero dolor
                  eget, the force within you it is.
                </dd>
              </div>
              <div className="relative pl-16 bg-transparent">
                <dt className="text-base font-semibold leading-7 text-green-800 shadow-green-200 bg-transparent">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 ">
                    <svg
                      className="h-6 w-6 bg-transparent"
                      fill="rgb(22 163 74)"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </div>
                  Funny Path
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400 bg-transparent">
                  Quisque est vel vulputate cursus. Risus proin diam nunc
                  commodo. Lobortis auctor congue commodo diam neque. The path
                  ahead, challenging it may be, but strength within you lies.
                </dd>
              </div>
              <div className="relative pl-16 bg-transparent">
                <dt className="text-base font-semibold leading-7 text-green-800 shadow-green-200 bg-transparent">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 ">
                    <svg
                      className="h-6 w-6 bg-transparent"
                      fill="rgb(22 163 74)"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                      />
                    </svg>
                  </div>
                  The Journey Within
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400 bg-transparent">
                  Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt
                  mattis aliquet hac quis. Id hac maecenas ac donec pharetra
                  eget. The journey within, a profound one it is.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <Carousel items={imagesItems} />

      {/* Timeline Section */}
      <Timeline />
      {/* Customer Reviews Section */}
      <Review />
    </div>
  );
};

export default About;
