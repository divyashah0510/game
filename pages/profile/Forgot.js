import React from "react";

const Forgot = () => {
  return (
    // <!-- component -->
    <div className="bg-transparent">
      <div className="max-w-lg mx-auto my-12 bg-transparent p-9 rounded-xl forgotBox">
        <h1 className="text-4xl font-extrabold homeGlow bg-transparent">
          Reset password
        </h1>
        <p className="text-green-600 bg-transparent">
          Fill up the form to reset the password
        </p>

        <form action="" className="my-10 bg-transparent">
          <div className="flex flex-col space-y-5 bg-transparent">
            <label htmlFor="email" className="bg-transparent">
              <p className="font-medium text-green-800 pb-2 bg-transparent">
                Email address
              </p>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full py-3 border bg-transparent border-green-600 rounded-lg px-3 focus-within:bg-transparent focus:border-green-600 hover:shadow"
                placeholder="Enter email address"
              />
            </label>

            <button className="w-full py-3 font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg border-green-500 hover:shadow inline-flex space-x-2 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#16a34a"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 bg-transparent"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
              </svg>

              <span className="bg-transparent">Reset password</span>
            </button>
            <p className="text-center bg-transparent">
              Not registered yet?{" "}
              <a
                href="/profile/SignUp"
                className="text-green-800 font-medium inline-flex space-x-1 items-center bg-transparent"
              >
                <span className="bg-transparent text-green-800">Register now </span>
                <span className="bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 bg-transparent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
