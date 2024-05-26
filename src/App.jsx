// import './app.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/home.jsx";
import KycForm from "./components/KycForm.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kycform" element={<KycForm />} />
      </Routes>
    </Router>
  );
}

export default App;
