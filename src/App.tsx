import "./App.css";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <div id="header" className="main__header">
        <Header />
      </div>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />

      <Footer />
    </div>
  );
}

export default App;
