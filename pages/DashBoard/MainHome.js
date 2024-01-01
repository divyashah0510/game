import Link from "next/link";
import React from "react";

const MainHome = () => {
  return (
    <div className="lg:px-6 bg-transparent myHome">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-44 bg-transparent">
        <div className="text-center bg-transparent">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl leading-loose homeGlow bg-transparent">
            A Game made for
          </h1>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl leading-loose homeGlow bg-transparent">
            Enjoyment Purpose
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 justify-between bg-transparent">
            Baby Yoda, also known as Grogu, is an adorable and enigmatic
            character from the Star Wars universe, introduced in "The
            Mandalorian" series. With big ears and wide eyes, this
            Force-sensitive infant captivated audiences with its cuteness and
            unexpected abilities.
          </p>
          <div className="mt-36 flex items-center justify-center gap-x-6 bg-transparent">
            <Link
              href="/profile/Login"
              className="rounded-xl text-xl HomeLink1 bg-transparent bg-none mt-0 m-4"
            >
              Get started
            </Link>
            <Link
              href="/"
              className="text-xl font-semibold bg-transparent leading-6 text-green-600 HomeLink2 mt-0 m-4"
            >
              Learn more <span className="bg-transparent" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
