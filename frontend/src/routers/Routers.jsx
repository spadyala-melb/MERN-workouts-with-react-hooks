import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Signup, PageNotFound } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/logout" exact element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routers;
