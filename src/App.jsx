import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Me } from "./components/Me/Me";
import { Education } from "./components/Education/Education";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Acc } from "./components/Acc/Acc";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Me/>
      <Education/>
      <Acc/>
      <Projects/>
      <Contact/>

 
     
    </div>
  );
}

export default App;
