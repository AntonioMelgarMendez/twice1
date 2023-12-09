// App.js

import React from "react";
import Main from "./components/Main";
import Navbar from "./components/navbar";
import Carousel from "./components/carrousel";
import TopDiscos from "./components/buyAlbum";
import AboutMe from "./components/aboutme";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Main />
      <Navbar />
      <TopDiscos/>
      <AboutMe/>
      <Carousel/>
      <Footer/>
 
    </div>
  );
}

export default App;
