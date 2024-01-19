import React from "react";
import { Route, Routes } from "react-router-dom";
import Experiens from "./components/Experiens";
import Education from "./components/Education";
import Hobby from "./components/Hobby";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/experians" element={<Experiens />} />
      <Route path="/education" element={<Education />} />
      <Route path="/hobby" element={<Hobby />} />
    </Routes>
  );
};

export default MainRoutes;
