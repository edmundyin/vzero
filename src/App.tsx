import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/landing/landing';
import Home from './components/home/home';
import Userinfo from './components/userInfo/userinfo';
import Cart from './components/shoppingCart/shoppingcart';
import Shop from './components/shop/shop';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/userinfo" element={<Userinfo />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
};

export default App;
