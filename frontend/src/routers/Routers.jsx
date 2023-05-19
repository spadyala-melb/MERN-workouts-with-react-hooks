import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, PageNotFound } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routers;
