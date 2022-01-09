import "./App.css";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <div id="header" className="main__header">
        <Header />
      </div>
      {/* <div id="home" className="home"> */}
      <Home />
      {/* </div> */}

      {/* <div id="about" className="about"> */}
      <About />
      {/* </div> */}

      {/* <div id="skills" className="skills"> */}
      <Skills />
      {/* </div> */}

      {/* <div id="experience"> */}
      <Experience />
      {/* </div> */}

      {/* <div id="education"> */}
      <Education />
      {/* </div> */}

      {/* <div id="footer"> */}
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default App;
