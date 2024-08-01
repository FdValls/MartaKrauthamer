// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { DataProvider } from "./Context/DataContext";
import "./App.css";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Listado from "./components/Listado.jsx";
import DividerText from "./components/utils/Divider.jsx";
import Footer from "./components/Footer.jsx";
// import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Navbar />
        <About />
        <Listado />
        <Contact />
        <DividerText />
        <Footer />
      </DataProvider>
    </div>
  );
}

// export default App;
export default App;
