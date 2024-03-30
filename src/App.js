import Intro from "./components/Intro";
import Career from "./components/Career";
import './index.css'
import Projects from "./components/Projects";
// import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      
      <Intro />
      <Career />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
