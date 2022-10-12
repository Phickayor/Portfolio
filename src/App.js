import "./App.css";
// import "./components/style.css";
import NavBar from "./components/navBar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <main>
      <NavBar />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
