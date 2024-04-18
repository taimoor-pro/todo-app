import React from "react";
import "./assets/css/index.css";
import Router from "./router";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router />
    </>
  );
};

export default App;
