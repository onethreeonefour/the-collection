import React from "react";

import { Route } from "react-router-dom";
import NavBar from "./Components/Navigation/Navbar";
import Landing from "./Components/Landing/Landing";

function App() {
  return (
    <>
      <NavBar />
      <Route exact path="/" component={Landing}></Route>
    </>
  );
}

export default App;
