import React from "react";
import { welcomeParagraph } from "../copy/welcome";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <div id="hero-container">
      {/* left side of the page used for image, stacked under for smaller devices */}
      <div id="hero-img-container">
        <img
          id="hero-img"
          src="/images/dean-grad-profile.jpg"
          alt="Dean Birnie graduation"
          // className="rounded-lg shadow-2xl hover:scale-105"
        />
      </div>
      {/* right side of the page used for text and heading, stacked on top for smaller devices */}
      <div id="hero-text" className="mx-10">
        <ReactTyped
          className="text-white font-semibold text-4xl"
          id="hero-heading"
          strings={[
            "SOFTWARE ENGINEER",
            "NETWORK ENGINEER",
            "SOLUTIONS ARCHITECT",
          ]}
          typeSpeed={70}
          backSpeed={50}
          loop
        />
        <p id="hero-paragraph">{welcomeParagraph}</p>
      </div>
    </div>
  );
}
