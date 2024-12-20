import styles from "./App.module.css";
import { About } from "./Components/About/about";
import { Contact } from "./Components/Contact/contact";
import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/navbar";
import { Projects } from "./Components/Projects/projects";

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
