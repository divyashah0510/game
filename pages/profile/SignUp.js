export default function SignUp() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-transparent">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-transparent">
        <img
          className="mx-auto h-28 w-28 bg-transparent"
          src="/images/yoda.png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-extrabold leading-9 tracking-widest text-green-600 LoginHead bg-transparent">
          Welcome to Balance Yoda
        </h2>
        <h2 className="mt-5 text-center text-2xl font-extrabold leading-9 tracking-widest text-white LoginHead bg-transparent">
          Get Started
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-transparent">
        <form className="space-y-6 bg-transparent" action="#" method="POST">
          <div className="bg-transparent">
            <label
              htmlFor="name"
              className="block text-base font-medium leading-6 text-green-800 bg-transparent"
            >
              Full Name
            </label>
            <div className="mt-2 flex justify-center items-center bg-transparent">
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                placeholder=" Divya Shah"
                required
                className=" bg-transparent border-green-600 w-[99%] rounded-md border-0 py-1.5 text-green-600 shadow-sm ring-1 ring-inset ring-green-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="bg-transparent">
            <label
              htmlFor="email"
              className="block text-base font-medium leading-6 text-green-800 bg-transparent"
            >
              Email address
            </label>
            <div className="mt-2 flex justify-center items-center bg-transparent">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="xyz@gmail.com"
                required
                className=" bg-transparent border-green-600 w-[99%] rounded-md border-0 py-1.5 text-green-600 shadow-sm ring-1 ring-inset ring-green-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="bg-transparent">
            <div className="flex items-center justify-between bg-transparent">
              <label
                htmlFor="password"
                className="block text-base bg-transparent font-medium leading-6 text-green-800"
              >
                Password
              </label>
              {/* <div className="text-sm bg-transparent">
                <a
                  href="/"
                  className="font-semibold bg-transparent text-green-600 hover:text-green-500 hover:shadow-white"
                >
                  Forgot password?
                </a>
              </div> */}
            </div>
            <div className="mt-2 bg-transparent flex justify-center items-center">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="You Don't need description for that :)"
                required
                className=" bg-transparent border-green-600 w-[99%] rounded-md border-0 py-1.5 text-green-600 shadow-sm ring-1 ring-inset ring-green-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="bg-transparent">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-green-800 bg-transparent">
          Already a member?{" "}
          <a
            href="/profile/Login"
            className="font-semibold leading-6 text-green-600 hover:text-green-500 bg-transparent"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
