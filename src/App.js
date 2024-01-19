import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
