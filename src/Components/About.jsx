import React from "react";
import image from "../images/mosaic.svg";

const About = () => {
  return (
    <section style={{ background: "rgba(255, 255, 255, 0.35)", color: "black" }}>
      <img src={image} />
      <div
        style={{
          backgroundColor: "white",
          width: "70%",
          padding: "4rem",
          margin: "7rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">
          I'm a UI/UX student studying at Barnett Technical University. I enjoy creating unique and
          simplistic user interfaces in creative ways.
        </p>
        <hr style={{ margin: "2.5rem" }} />
        <ul style={{ textAlign: "left", columns: 2, fontSize: "1.25rem" }}>
          <li>Web design</li>
          <li>User experience</li>
          <li>Inclusive design</li>
          <li>Focus group testing</li>
          <li>Mobile user interfaces</li>
          <li>Graphic design</li>
        </ul>
        <p style={{ padding: "2rem 3rem 0" }}>
          I am passionate about solving problems in new creative ways to drive innovation. By
          leveraging my UI/UX experience I continually look for new and better ways to make tech
          accessible by all.
        </p>
      </div>
    </section>
  );
};

export default About;
