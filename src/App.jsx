import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './components/HomePage';
import Trainer from './components/Trainer';
import SuccessStories from './components/SuccessStories';
import Membership from './components/Membership';
import './App.css';
import AboutPage from './components/AboutUs';
import Schedule from './components/Schedule';
import FacilitiesPage from './components/Facilities';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
