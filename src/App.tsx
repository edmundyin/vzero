import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/landing/landing';
import Home from './components/home/home';
import Userinfo from './components/userInfo/userinfo';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/userinfo" element={<Userinfo />} />
      </Routes>
    </Router>
  );
};

export default App;
