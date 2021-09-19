import React from "react";
import Nav from "./components/Nav"
import Footer from "./components/Footer"

function App(props) {
  return (
    <div>
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
}

export default App;
