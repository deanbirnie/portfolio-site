import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div id="home-hero">
        <Hero />
      </div>
    </div>
  );
}
