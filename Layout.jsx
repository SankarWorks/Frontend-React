import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import './SearchFilter.css';
import { IoCartOutline } from "react-icons/io5";

export default function Layout() {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  
  const isProductPage = location.pathname === '/Product';

  return (
    <>
      <nav className="navbar">
        <div className="logo"><h1>Rockerz</h1></div>
        <ul>
          {isProductPage && (
            <li className="search-bar">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button>
                <i className="fa fa-search"></i>
              </button>
            </li>
          )}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Product">Product</Link></li>
          <li><Link to="/Signin">Sign in</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Aboutus">About us</Link></li>
          <li><Link to="/Cart"><IoCartOutline /></Link></li>
        </ul>
      </nav>
      <Outlet context={{ searchTerm }} /> 
    </>
  );
}
