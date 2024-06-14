import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import {  Nav} from 'react-bootstrap';
import '../css/custom.css'; // Import the custom CSS
// import { FaShoppingCart } from 'react-icons/fa';

function CustomNavbar({ isLoggedIn, setIsLoggedIn, username }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span className="brand-red" style={{ marginRight: "10px", height: "60px" }}>PRODUCT</span>
            <span className="brand-white" style={{ marginRight: "20px", paddingTop: "20px" }}>DEKHO</span>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link nav-link-red" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-red" to="/about">About</Link>
              </li>
              <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`} onClick={toggleDropdown}>
                <a className="nav-link dropdown-toggle nav-link-red" href='#' id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded={dropdownOpen}>
                  Car Types
                </a>
                <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item dropdown-item-red" to="/electric" style={{color:"red"}}>Electric</Link>
                  <Link className="dropdown-item dropdown-item-red" to="/truck" style={{color:"red"}}>Truck</Link>
                  <Link className="dropdown-item dropdown-item-red" to="/sedan" style={{color:"red"}}>Sedan</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item dropdown-item-red" to="/luxury" style={{color:"red"}}>Luxury</Link>
                </div>
              </li>
              {!isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link nav-link-red" to="/register">Register</Link>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link nav-link-red" to="/login" onClick={handleLogout}>Logout</Link>
                </li>
              )}
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link nav-link-red" to="/cart">Cart</Link>
              </li>
            </ul>
          {/* <ul>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/cart" className="nav-link-red">
                <FaShoppingCart size={20} />
              </Nav.Link>
            </Nav>
            </ul> */}
            <div className="d-flex ms-auto">
              <input
                type="search"
                placeholder="Search"
                className="form-control me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearch}
                style={{ marginRight: '10px' }}
              />
              <Link to={`/Dict?search=${searchTerm}`} className="btn btn-outline-success" style={{ backgroundColor: "red", color: "white"}}>
                Search
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {isLoggedIn && (
        <div className="welcome-message">
          <span className="welcome-text" style={{ color: "white", fontSize: "20px" }}>Welcome, {username}! Let's Dive Into The Car</span>
        </div>
      )}
    </>
  );
}

export default CustomNavbar;
