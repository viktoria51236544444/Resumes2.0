import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Animazy from "./components/Animazy";

const App = () => {
  return (
    <div>
      <Header />
      <Animazy />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
