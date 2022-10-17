import React from "react";
import "./App.css";
// import "./components/style.css";
import NavBar from "./components/navBar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    // style={{ marginRight: "200px" }}
    <div>
      <NavBar />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
