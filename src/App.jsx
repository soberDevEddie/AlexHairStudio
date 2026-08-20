import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import ServicesPricing from './Components/ServicesPricing'
import Gallery from './Components/Gallery'
import Location from './Components/Location'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPricing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Navigate to="/services" replace />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
