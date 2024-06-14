import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import CustomNavbar from './components/CustomNavbar';
import Electric from './pages/car_types/Electric';
import Truck from './pages/car_types/Truck';
import Sedan from './pages/car_types/Sedan';
import Luxury from './pages/car_types/Luxury';
import CarDetails from './components/CarDetails';
import Dictionary from './components/Dictionary';
import About from './components/About';
import Payment from './components/Payment';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import Paymentsucess from './components/Paymentsucess';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [popupMessage, setPopupMessage] = useState("");
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    console.log("Item is Added to the Card:" ,item);
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });

    if (isPresent) {
      setPopupMessage("Item is already in your cart");
      setWarning(true);
    } else {
      setCart([...cart, item]);
      setPopupMessage("Item added to your cart successfully");
      setWarning(false);
    }

    setTimeout(() => {
      setPopupMessage("");
    }, 2000);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <Router>
      <div className='background'>
        <CustomNavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setShow={setShow} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
          <Route path="/electric" element={<Electric />} />
          <Route path="/truck" element={<Truck />} />
          <Route path="/sedan" element={<Sedan />} />
          <Route path="/luxury" element={<Luxury />} />
          <Route path="/car-details" element={<CarDetails handleClick={handleClick} />} />
          <Route path='/Dict' element={<Dictionary cart={cart} handleClick={handleClick} />} />
          <Route path='/payment/:cost' element={<Payment isLoggedIn={isLoggedIn}/>} />
          <Route path='/cartdata' element={<Amazon handleClick={handleClick} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
          <Route path='/paid' element={<Paymentsucess />}></Route>
        </Routes>

        {popupMessage && (
          <div className={warning ? 'warning' : 'success1'}>
            {popupMessage}
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
