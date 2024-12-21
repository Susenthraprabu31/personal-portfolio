import styles from "./App.module.css";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/Navbar";
import { Projects } from "./Components/Project/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
