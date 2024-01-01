import { faMeta } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Review() {
  return (
    <section className="relative isolate overflow-hidden bg-transparent mt-28 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.black.100),green)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-transparent shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <h1 className="flex justify-center items-center text-7xl font-extrabold -tracking-tighter homeGlow mb-11 sm:text-7xl">
        Our Reviews
      </h1>
      <div className="mx-auto max-w-2xl lg:max-w-4xl bg-transparent">
        <FontAwesomeIcon
          className="mx-auto h-12 bg-opacity-1 flex"
          icon={faMeta}
        />

        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 bg-transparent bg-opacity-50">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-green-600">Judith Black</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-400">
                CEO of Infinity
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
