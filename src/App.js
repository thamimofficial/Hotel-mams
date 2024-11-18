import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home'; // Ensure the path matches where your Home component is stored
import FoodCards from './screens/FoodCards';
import CheckOut from './screens/CheckOut';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} /> {/* Home page at /home */}
        <Route path="/food-cards" element={<FoodCards />} /> {/* Accessible at /food-cards */}
        <Route path="/checkout" element={<CheckOut />} /> {/* Accessible at /checkout */}
        <Route path="/" element={<CheckOut />} /> {/* Default route, checkout page */}
      </Routes>
    </Router>
  );
}

export default App;
