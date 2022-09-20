import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100vw",
        zIndex: 10,
      }}
    >
      <a>Home</a>
      <a>About</a>
      <a>Portfolio</a>
      <a>Contact</a>
    </div>
  );
};

export default Header;
