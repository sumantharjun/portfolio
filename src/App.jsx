import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar   from './components/Navbar';
import Footer   from './components/Footer';
import Home     from './pages/Home';
import About    from './pages/About';
import Resume   from './pages/Resume';
import Projects from './pages/Projects';
import Hobbies  from './pages/Hobbies';
import Contact  from './pages/Contact';
import './styles/global.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />}     />
        <Route path="/about"    element={<About />}    />
        <Route path="/resume"   element={<Resume />}   />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies"  element={<Hobbies />}  />
        <Route path="/contact"  element={<Contact />}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
