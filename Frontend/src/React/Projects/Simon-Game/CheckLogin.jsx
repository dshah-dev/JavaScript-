import React, { useState } from "react";
import SimonGame from "./SimonGame";
import SimonLogin from "./SimonLogin";
import Navebar from "./Navebar";

function CheckLogin() {
  const [login, setLogin] = useState(false);
  const handleLogout = () => {
    setLogin(false);
  };

  return (
    <div>
      {login && <Navebar handleLogout={handleLogout} />}
      {login ? <SimonGame /> : <SimonLogin onLogin={() => setLogin(true)} />}
    </div>
  );
}

export default CheckLogin;
