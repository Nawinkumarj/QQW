import Contact from './Pages/Contact.jsx'
import Footer from './Components/Footer'
import { Routes, Route } from "react-router";
import About from './Pages/About.jsx';
import Teams from './Pages/Teams.jsx';
import Home from './Pages/Home.jsx'
import Services from './Pages/Services.jsx';
import Navbar from './Components/Navbar.jsx';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App