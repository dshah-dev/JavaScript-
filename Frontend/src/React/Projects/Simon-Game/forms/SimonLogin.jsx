import React, { useState } from "react";
// import FormikSigninForm from "./FormikSignUp";
import SignUpForm from "./SignUpForm";

function SimonLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-100">
        <form
          onSubmit={handleLogin}
          action=""
          className="border rounded-lg shadow-lg bg-linear-to-br from-blue-600 to-purple-500 w-full max-w-lg"
        >
          <div className="flex flex-col justify-between items-center m-3">
            <h1 className="font-bold text-white border-b shadow-lg m-3 p-3">
              Login with below data
            </h1>
            <h3 className="text-white flex flex-col m-1 p-1 items-center">
              <span>Current user name : Play</span>
              <span className="">password : 123</span>
            </h3>
          </div>
          <div>
            <div>
              <label
                className="block text-sm font-medium m-3"
                htmlFor="UserName"
              >
                UserName
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter you name"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium m-3"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button className="w-full bg-white py-2 mt-2 rounded-lg hover:bg-amber-50">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>

      <SignUpForm />
      {/* <FormikSigninForm /> */}
    </>
  );
}

export default SimonLogin;
