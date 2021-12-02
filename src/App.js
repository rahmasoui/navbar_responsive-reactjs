import React from "react";
import { BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Services from "./pages/Service/Services";
import Testmonial from "./pages/Testmonial/Testmonial";
import Navbar from "./Components/Navbar/Navbar";


const App = () => {
  return (
    <Router>
      <Navbar />




      <main>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/services" element={<Services />} exact />
        <Route path="/testmonial" element={<Testmonial />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      
      </main>
  </Router>
  );
}

export default App;
