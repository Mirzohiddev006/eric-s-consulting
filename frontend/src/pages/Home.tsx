// src/pages/Home.tsx

import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Team from "../components/Team";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <main className="bg-white">
        <Features />
        <About />
        <Team />
      </main>
    </>
  );
};

export default Home;
