import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login'; // Import the Login component
import ManageMembers from './pages/ManageMembers';
import Navbar from './components/Navbar';
import MembershipPlans from './components/MembershipPlans';

const App = () => {
  const [user, setUser] = useState(null); // State to track the logged-in user

  useEffect(() => {
    // Check if the user is already stored in localStorage (user might still be logged in)
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <Router>
      {/* Pass user state and setUser function to the Navbar */}
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership-plans" element={<MembershipPlans />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} /> {/* Add login route */}
        <Route path="/manage-members" element={<ManageMembers />} />
      </Routes>
    </Router>
  );
};

export default App;
