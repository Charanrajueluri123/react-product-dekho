import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../css/cardetails.css';

const CarDetails = ({ handleClick }) => {
  const location = useLocation();
  const { item } = location.state || {}; // Destructure item from state

  if (!item) {
    return <div>No car details available</div>;
  }

  const { img1, name, price } = item;

  return (
    <div className="product-detail">
      <div className="image-container">
        <img src={img1} alt={name} />
      </div>
      <div className="product-info">
        <h1>{name}</h1>
        <p className="price">
          ₹{price} <span className="original-price">₹2,00,000</span> <span className="discount">50% off</span>
        </p>
        <div className="offers">
          <p>Available offers:</p>
          <ul>
            <li>5% Cashback on Flipkart Axis Bank Card</li>
            <li>10% off up to ₹1250 on HDFC Bank Credit Card EMI Txns</li>
            <li>10% off up to ₹1500 on HDFC Bank Credit Card EMI Txns</li>
            <li>Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000</li>
          </ul>
        </div>
        {/* <Link to="/payment">
          <button className="buy-now">BUY NOW</button>
        </Link> */}
        <Link to={`/payment/${price}`}><button className='buy-now'>BUY NOW</button></Link>
        <button className="add-to-cart" onClick={()=>handleClick(item)}>ADD TO CART</button>
        <div className="delivery-info">
          <input type="text" placeholder="Enter pincode" className="pincode-input" />
          <button className="check-pincode">Check</button>
          <p>Delivery by 9 Jun, Sunday | Free ₹40</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
