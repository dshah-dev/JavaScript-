import React, { useState } from "react";

function SimonLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <form
        onSubmit={handleLogin}
        action=""
        className="border rounded-lg shadow-lg bg-linear-to-br from-blue-600 to-purple-500 min-w-md"
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
            <input
              type="text"
              className="w-full mb-3 p-2 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter you name"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className="w-full bg-white py-2 rounded-lg hover:bg-amber-50 ">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SimonLogin;
