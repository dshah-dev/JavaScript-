import React from "react";

function Clock() {
  let time = new Date();

  return <div className="p-4 m-4 border rounded-2xl min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-cyan-100 to-cyan-500">
    <h1 className="text-4xl p-4 m-2 bg-white rounded-3xl shadow-xl w-full max-w-md text-center">Clock </h1>
    <h3 className="text-2xl p-4 m-2 bg-amber-50 rounded-3xl shadow-xl w-full max-w-md text-center">This Clock shows India's Current time.</h3>
    <p className="bg-amber-50 rounded-3xl shadow-xl w-full max-w-md text-center p-4 m-2">Current Date is: {time.toLocaleDateString()}</p>
    <p className="bg-amber-50 rounded-3xl shadow-xl w-full max-w-md text-center p-4 m-2">Current time is: {time.toLocaleTimeString()}</p>
    
  </div>
}

export default Clock;  
