/*import React from 'react'
import "../Styles/CSS/Header.css";
import { useNavigate } from 'react-router-dom';

function header() {
     

  

  return (
   <>
    <div id="container">
                
                <div id="shopName"><a href="Slider.html"> DDPACKS </a></div>
                    
                    <div id="collection">
                        <div id="clothing"><a href="clothing.html?"> CLOTHING </a></div>
                        <div id="accessories"><a href="accessories.html?"> ACCESSORIES </a></div>
                    </div>
                    
                    <div id="search">
                        <i className="fas fa-search search"></i>
                        <input type="text" id="input" name="searchh2ox" placeholder="Search for Clothing and Accessories"/>
                    </div>
                    
                    <div id="user">
                        <a href="cart.html"><i className="fa-solid fa-cart-shopping"><div id="h2adge"> 0 </div></i></a>
                        <a href="#">  </a>
                    </div>
            </div>
   </>  
  )
}

export default header
#####................#####
import React from 'react';
import "../Styles/CSS/Header.css";
import { useNavigate } from 'react-router-dom';
//import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div id="container">
      <div id="shopName" onClick={() => navigate('/')}>
        TOPACKPOLYMERS
      </div>

      <div id="collection">
        <div id="clothing" onClick={() => navigate('/content')}>PRODUCTS</div>
        <div id="accessories" onClick={() => navigate('/accessories')}>ACCOUNT</div>
      </div>

      <div id="search">
        <i className="fas fa-search search"></i>
        <input
          type="text"
          id="input"
          name="searchh2ox"
          placeholder="Search for Avaih2le Products"
        />
      </div>

      <div id="user">
        <div ><a onClick={() => navigate('/cart')}><i id= "userIcon" className="fa-solid fa-cart-shopping"><div id="h2adge">0</div></i></a>

        </div>
      </div>
    </div>
  );
};

export default Header;*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/CSS/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  return (
    <div id="container">
      <div id="shopName" onClick={() => navigate('/')}>
        TOPACKPOLYMERS
      </div>

      <div id="collection">
        <div id="clothing" onClick={() => navigate('/content')}><h3>PRODUCTS</h3></div>
        {/*<div id="accessories" onClick={() => navigate('/accessories')}>ACCOUNT</div>*/}
      </div>

      <div id="search">
        <i className="fas fa-search search"></i>
        <input
          type="text"
          id="input"
          name="searchh2ox"
          placeholder="Search for Available Products"
        />
      </div>

      <div id="user">
        <div className="iconWrapper" onClick={() => navigate('/cart')}>
          <i id="userIcon" className="fa-solid fa-cart-shopping">
            <div id="h2adge">0</div>
          </i>
        </div>

        <div className="iconWrapper" onClick={toggleDropdown}>
          <i className="fa-solid fa-user" id="userDropdownIcon"></i>
          {showDropdown && (
            <div className="dropdown">
              <div onClick={() => navigate('/login')}>Login</div>
              <div onClick={() => navigate('/register')}>Register</div>
              <div onClick={() => navigate('/profile')}>Profile</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

