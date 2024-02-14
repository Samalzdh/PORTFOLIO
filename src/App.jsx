import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  // useEffect(() => {
  //   const blob = document.getElementById("blob");

  //   const moveBlob = (event) => {
  //     const { clientX, clientY } = event;

  //     blob.animate(
  //       {
  //         left: `${clientX}px`,
  //         top: `${clientY}px`,
  //       },
  //       { duration: 3000, fill: "forwards" }
  //     );
  //   };

  //   window.addEventListener("pointermove", moveBlob);

  //   // Nettoyage de l'effet
  //   return () => window.removeEventListener("pointermove", moveBlob);
  // }, []);
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
