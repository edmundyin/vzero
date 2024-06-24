import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Landing from './components/landing/landing';
import Home from './components/home/home';
import Userinfo from './components/userInfo/userinfo';
import Cart from './components/shoppingCart/shoppingcart';
import Shop from './components/shop/shop';
import About from './components/about/about';

const App: React.FC = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/userinfo" element={<Userinfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
