import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './components/HomePage';
import Trainer from './components/TrainersPage';
import SuccessStories from './components/SuccessStories';
import Membership from './components/PricingPage';
import './App.css';
import AboutPage from './components/AboutUs';
import Schedule from './components/Schedule';
import FacilitiesPage from './components/Facilities';
import TrainersPage from './components/TrainersPage';
import PricingPage from './components/PricingPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/trainers" element={<TrainersPage />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/pricing-page" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
