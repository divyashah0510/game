// import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Handling Change Function
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Success:", result);
      setEmail("");
      setPassword("");
      if (result.success) {
        toast.success("🦄 logged in Successfully!", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          router.push("http://localhost:3000");
        }, 1000);
      } else {
        toast.error(`🦄 ${result.error}`, {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-transparent mt-28 mb-28">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-transparent">
          {/* <img
          className="mx-auto h-28 w-28 bg-transparent"
          src="/images/yoda.png"
          alt="Your Company"
        /> */}
          <h2 className="mt-10 text-center text-2xl font-extrabold leading-9 tracking-widest text-green-600 LoginHead bg-transparent">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-transparent">
          <form
            className="space-y-6 bg-transparent"
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className="bg-transparent">
              <label
                htmlFor="email"
                className="block text-base font-medium leading-6 text-green-800 bg-transparent"
              >
                Email address
              </label>
              <div className="mt-2 flex justify-center items-center bg-transparent">
                <input
                  onChange={handleChange}
                  value={email}
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
                <div className="text-sm bg-transparent">
                  <a
                    href="/profile/Forgot"
                    className="font-semibold bg-transparent text-green-600 hover:text-green-500 hover:shadow-white"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 bg-transparent flex justify-center items-center">
                <input
                  onChange={handleChange}
                  value={password}
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
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-green-800 bg-transparent">
            Not a member?{" "}
            <a
              href="/profile/SignUp"
              className="font-semibold leading-6 text-green-600 hover:text-green-500 bg-transparent"
            >
              Let's Connect
            </a>
          </p>
        </div>
        {/* Add Spline Component */}
      </div>
    </div>
  );
}
