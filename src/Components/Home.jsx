import React from "react";
import image from "../images/server-wall.jpg";
import arrowSvg from "../images/down-arrow.svg";

const Home = () => {
  return (
    <section style={{ background: "rgba(0, 0, 0, 0.25)" }}>
      <img src={image} />
      <div style={{ position: "absolute", top: "30%", left: "2rem" }}>
        <h1>Alexandrie Grenier</h1>
        <h2>Web Designer & Content Creator</h2>
      </div>
      <div style={{ position: "absolute", bottom: "8rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} />
      </div>
    </section>
  );
};

export default Home;
