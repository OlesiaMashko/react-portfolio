import Background from "./components/Background";
import Contact from "./components/Contact";
import Experiece from "./components/Experiece";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

import React, { useEffect} from "react";

function App() {

  useEffect(() => {
    document.title = "My Profile";  
  }, []);

  return (
    <div>
      <NavBar />
      <Home />
      <Background />
      <Portfolio />
      <Experiece />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
