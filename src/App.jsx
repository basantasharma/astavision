// import './app.css';
import ReactDom from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navigation from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
    </>
  );
}

export default App;
