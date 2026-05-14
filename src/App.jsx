import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Career from './components/Career';
import Contact from './components/Contact';
import Appointment from './components/Appointment';




function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="/appointment" element={<Appointment />} />


        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;