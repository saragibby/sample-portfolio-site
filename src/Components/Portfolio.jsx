import React from "react";
import projectImage from "../images/positive-quote.png";
import deskImage from "../images/design-desk.jpeg";

const Portfolio = () => {
  return (
    <div style={{ color: "black", textAlign: "center", margin: "4rem 0", position: "relative" }}>
      <h2>From My Desk</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "2rem" }}>
        <img
          src={deskImage}
          style={{ maxWidth: "40vw", height: "80%", objectFit: "contain", zIndex: -1 }}
        />
        <div class="container">
          <div class="box">
            <img src={projectImage} />
            <h3>Project 1</h3>
          </div>
          <div class="box">
            <img src={projectImage} />
            <h3>Project 2</h3>
          </div>
          <div class="box">
            <img src={projectImage} />
            <h3>Project 3</h3>
          </div>
          <div class="box">
            <img src={projectImage} />
            <h3>Project 4</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
