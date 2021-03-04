import React from "react";

import { Route } from "react-router-dom";
import NavBar from "./Components/Navigation/Navbar";
import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Navigation/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Route exact path="/" component={Landing}></Route>
    </>
  );
}

export default App;
