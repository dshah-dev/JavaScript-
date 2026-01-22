import React from "react";

function Navebar({handleLogout}) {
  return (
    <>
      <nav>
        <div className=" mx-auto max-w-7xl h-16 float-left">
          <button onClick={handleLogout} className="border border-white rounded-lg px-8 py-4 font-medium shadow-md hover:bg-black hover:text-white transition-all duration-200 cursor-pointer">
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navebar;
