import "./App.css";
import "./styles.css";
import Navbar from "./components/navbar";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePageContent from "./components/homePageContent";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HomePageContent />
    </React.Fragment>
  );
}

export default App;
