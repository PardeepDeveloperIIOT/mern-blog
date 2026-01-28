import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./user/SignIn";
import SignUp from "./user/SignUp";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import NavBarHeader from "./components/NavBarHeader";

const App = () => {
  return (
    <div className="w-full lg:max-w-screen-2xl mx-auto">
      <NavBarHeader></NavBarHeader>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
      </Routes>
    </div>
  );
};

export default App;
