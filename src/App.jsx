import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default App;
