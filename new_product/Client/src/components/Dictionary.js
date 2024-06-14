import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/searchdata.css';
import { Link } from 'react-router-dom';
import list from './data';

const Dictionary = ({ handleClick }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const searchTerm = searchParams.get('search');

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      // Redirect to the home page if search term is empty
      navigate('/');
    } else {
      const results = list.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(results);
    }
  }, [searchTerm, navigate]);
  
  return (
    <div>
      <ul>
        {filteredData.map((eachObj) => {
          const { id, name, img1, fueltype, mileage, capacity, maxpower, desc, price, rating } = eachObj;
          return (
            <Profile 
              key={id}
              id={id}
              name={name}
              img1={img1}
              fueltype={fueltype}
              mileage={mileage}
              capacity={capacity}
              maxpower={maxpower}
              desc={desc}
              price={price}
              rating={rating}
              handleClick={() => handleClick(eachObj)} // Pass handleClick to Profile
            />
          );
        })} 
      </ul>
    </div>
  );
};

const Profile = ({ id, name, img1, fueltype, mileage, capacity, maxpower, desc, price, rating, handleClick }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>★</span>);
    }
    for (let i = (5 - rating); i > 0; i--) {
      stars.push(<span key={i + rating}>☆</span>);
    }
    return stars;
  };

  return (
    <div className="product-listing">
      <div className="product">
        <img src={img1} alt={name} className="product-image"/>
        <div className="product-info">
          <h3>{desc}</h3>
          <div className="rating">{renderStars(rating)}</div>
          <div className="price">Price: ₹{price}</div>
          <div className="Fueltype">Fuel Type: {fueltype}</div>
          <div className="Capacity">Capacity: {capacity}</div>
          <div className="Mileage">Mileage: {mileage}</div>
          <div className="Maxpower">Maxpower: {maxpower}</div>
          <div className="Fueltype">Fuel Type: {fueltype}</div>

          <div className="buttons">
            <button className="add" onClick={handleClick}>Add</button>
            {/* <Link to="/payment">
              <button className="buy">Buy Now</button>
            </Link> */}

<Link to={`/payment/${price}`}><button className='buy'>Buy Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dictionary;
