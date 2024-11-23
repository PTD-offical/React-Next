import React from "react";
import Button from "./Button.jsx";
const Header = () => {
  return(
       <>
    <header>
    <h1>PTD_Dev</h1>

    <div className="btn" style={{ display: "flex", gap: "50px" }}>
      <Button/>
      <Button/>
      <Button/>
      
    </div>
  </header>
  </>
  );
};

export default Header;
