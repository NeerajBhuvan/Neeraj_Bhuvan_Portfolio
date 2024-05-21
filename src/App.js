import NavBar from "./components/NavigationBar/NavBar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Qualification from "./components/Qualification/Qualification";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer";
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Projects />
      <Qualification />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
