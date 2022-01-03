import React from "react";
import HomePageContent from "./components/homePageContent";
import Navbar from "./components/navbar";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HomePageContent />
    </React.Fragment>
  );
}

export default App;
