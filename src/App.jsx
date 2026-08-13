import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Services from './Components/Services'
import Gallery from './Components/Gallery'
import Pricing from './Components/Pricing'
import Location from './Components/Location'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
