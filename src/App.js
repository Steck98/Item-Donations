import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import HomePage from "../src/Pages/Home";
import SignIn from "./components/signIn";
import SignInPage from "../src/Pages/SignIn";
import SignUpPage from "../src/Pages/SignUp";

function App() {
  return (
    <div className="container">
      <SignIn> </SignIn>
      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignIn" element={<SignInPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;