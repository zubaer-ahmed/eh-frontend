import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    email: "admin",
    password: "",
  });
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
    clearErrors();
    if (user.email != "admin" && (!user.email || !user.password))
      return showErrorMessage("Please fill in all the fields");

    let res = await fetch("http://localhost:8000/api/users/login", {
      method: "POST",
      credentials: "include", // Required to allow setting of cookies
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    let responseJSON = await res.json();
    console.log("response", responseJSON);
    if (res.status != 200) {
      return showErrorMessage(responseJSON?.error);
    }
    localStorage.jwt = responseJSON.jwt;
    navigate("/");
  }
  function showErrorMessage(msg) {
    document.querySelector("#login-error").textContent = msg;
    document.querySelector("#login-error").classList.remove("hidden");
  }
  function clearErrors() {
    document.querySelector("#login-error").classList.add("hidden");
  }

  return (
    <>
      <div className="h-full grow overflow-auto bg-gray-100 flex flex-col py-8">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center font-medium">Login</h1>
            <div
              id="login-error"
              className="text-sm p-2 rounded bg-red-100 border my-4 text-red-500 text-center hidden"
            ></div>
            <input
              type="text"
              className="border w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={(event) => {
                setUser({ ...user, email: event.target.value });
              }}
            />

            <input
              type="password"
              className="border w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={(event) => {
                setUser({ ...user, password: event.target.value });
              }}
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
              onClick={handleSubmit}
            >
              Login
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By using the application, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Don't have an account?{" "}
            <Link
              className="no-underline border-b border-blue text-blue"
              to="/login"
            >
              Sign Up
            </Link>
            .
          </div>
        </div>
      </div>
    </>
  );
};
