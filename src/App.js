import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/screens/Home'; // Ensure the path matches where your Home component is stored
import FoodCards from './app/screens/FoodCards';
import CheckOut from './app/screens/CheckOut';
import LoginPage from './app/auth/LoginPage';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  // Update screen size on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Hide app on small screens and show mobile icon to open */}
      <style>
        {`
          /* Default visibility for large screens (tablet and desktop) */
          .app-wrapper {
            display: block;
          }

          /* Hide app on screens smaller than 768px (mobile and small tablet) */
          @media (max-width: 767px) {
            .app-wrapper {
              display: none;
            }
            .mobile-icon {
              display: block;
            }
          }

          /* Center the mobile icon on small screens */
          .mobile-icon {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 2rem;
            color: #ff7f50;
            cursor: pointer;
            background-color: #fff;
            padding: 20px;
            border-radius: 50%;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            z-index: 1000;
          }
        `}
      </style>

      {/* Mobile icon shown only on small devices */}
      {isMobile && (
        <div
          className="mobile-icon"
          onClick={() => window.location.replace('/')} // Redirect to homepage (or any other action)
        >
          📱 Open App on Tablet/Desktop
        </div>
      )}

      {/* Main app content visible only on large screens */}
      <div className="app-wrapper">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Default route, home page */}
            <Route path="/home" element={<Home />} /> {/* Home page at /home */}
            <Route path="/food-cards" element={<FoodCards />} /> {/* Food cards at /food-cards */}
            <Route path="/checkout" element={<CheckOut />} /> {/* Checkout at /checkout */}
            <Route path="/login" element={<LoginPage />} /> {/* Login page at /login */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './app/screens/Home'; // Ensure the path matches where your Home component is stored
// import FoodCards from './app/screens/FoodCards';
// import CheckOut from './app/screens/CheckOut';
// import LoginPage from './app/auth/LoginPage';

// function App() {
//   return (
//     <>
//       <style>
//         {`
//           /* Default visibility for large screens (tablet and desktop) */
//           .app-wrapper {
//             display: block;
//           }

//           /* Hide app on screens smaller than 768px (mobile and small tablet) */
//           @media (max-width: 767px) {
//             .app-wrapper {
//               display: none;
//             }
//           }
//         `}
//       </style>

//       <div className="app-wrapper">
//         <Router>
//           <Routes>
//             <Route path="/" element={<Home />} /> {/* Default route, home page */}
//             <Route path="/home" element={<Home />} /> {/* Home page at /home */}
//             <Route path="/food-cards" element={<FoodCards />} /> {/* Food cards at /food-cards */}
//             <Route path="/checkout" element={<CheckOut />} /> {/* Checkout at /checkout */}
//             <Route path="/login" element={<LoginPage />} /> {/* Login page at /login */}
//           </Routes>
//         </Router>
//       </div>
//     </>
//   );
// }

// export default App;
