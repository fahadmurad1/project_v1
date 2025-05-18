/*import React, { useEffect, useState } from 'react';
import api from '../api'; // Axios instance
import "../Styles/CSS/content.css";

const Content = () => {
  const [contentTitle, setContentTitle] = useState([]);

  useEffect(() => {
    // API CALL using axios to your Django backend
    api.get('/api/skus/') // Endpoint as per your backend API
      .then((response) => {
        setContentTitle(response.data);

        // Cookie counter logic (same as your original code)
        if (document.cookie.indexOf(",counter=") >= 0) {
          const counter = document.cookie.split(",")[1].split("=")[1];
          const badge = document.getElementById("badge");
          if (badge) {
            badge.innerHTML = counter;
          }
        }
      })
      .catch((error) => {
        console.log("call failed!", error);
      });
  }, []);

  const dynamicClothingSection = (ob) => (
    <div id="box" key={ob.sku_code}>
      <a href={`/contentDetails.html?${ob.sku_code}`}>
        <img src={ob.preview} alt={ob.name} />
        <div id="details">
          <h3>{ob.name}</h3>
          <h4>{ob.description}</h4>
          <h2>rs {ob.price}</h2>
        </div>
      </a>
    </div>
  );

  return (
    <div id="mainContainer">
      <h1>clothing for men and women</h1>
      <div id="containerClothing">
        {contentTitle
          .filter((item) => item.isAccessory === false) // Assuming you want to filter out accessories
          .map((item) => dynamicClothingSection(item))}
      </div>

      <h1>accessories for men and women</h1>
      <div id="containerAccessories">
        {contentTitle
          .filter((item) => item.isAccessory === true) // Filter accessories
          .map((item) => dynamicClothingSection(item))}
      </div>
    </div>
  );
};

export default Content;
#............before details.....#
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import api from '../api'; // Axios instance
import "../Styles/CSS/content.css";

const Content = () => {
  const [contentTitle, setContentTitle] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/api/skus/')
      .then((response) => {
        setContentTitle(response.data);

        // Cookie counter update
        if (document.cookie.indexOf(",counter=") >= 0) {
          const counter = document.cookie.split(",")[1].split("=")[1];
          const badge = document.getElementById("badge");
          if (badge) badge.innerHTML = counter;
        }
      })
      .catch((error) => {
        console.log("API call failed!", error);
      });
  }, []);

  
const dynamicProductSection = (ob) => (
  <div
    id="box"
    key={ob.sku_code}
    onClick={() => navigate(`/product/${ob.sku_code}`)}
    style={{ cursor: 'pointer' }}
  >
    <img 
      src={ob.main_image ? `/images/${ob.main_image}` : "https://via.placeholder.com/150"} 
      alt={ob.name} 
    />
    <div id="details">
      <h3>{ob.name}</h3>
      <p>{ob.description}</p>
      <p><strong>Capacity:</strong> {ob.capacity}</p>
      <p><strong>Unit:</strong> {ob.unit_of_measurement}</p>
      <p><strong>Units/Packet:</strong> {ob.units_per_packet}</p>
      <p><strong>Case Config:</strong> {ob.case_config}</p>
      <h4>₹ {ob.price}</h4>
    </div>
  </div>
);

  return (
    <div id="mainContainer">
      <h1>All Products</h1>
      <div id="containerClothing">
        {contentTitle.map((item) => dynamicProductSection(item))}
      </div>
    </div>
  );
};

export default Content;*/
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import api from '../api'; // Axios instance
import "../Styles/CSS/content.css";

const Content = () => {
  const [contentTitle, setContentTitle] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/api/skus/')
      .then((response) => {
        setContentTitle(response.data);

        // Update cookie badge
        const cookieCounter = document.cookie.split(',').find(c => c.includes('counter='));
        if (cookieCounter) {
          const counter = cookieCounter.split('=')[1];
          const badge = document.getElementById("badge");
          if (badge) badge.innerHTML = counter;
        }
      })
      .catch((error) => {
        console.error("API call failed!", error);
      });
  }, []);

  const dynamicProductSection = (ob) => (
    <div
      id="box"
      key={ob.id}
      onClick={() => navigate(`/product/${ob.id}`)} // Use ID for navigation
      style={{ cursor: 'pointer' }}
    >
      <img 
        src={ob.main_image ? `/images/${ob.main_image}` : "https://via.placeholder.com/150"} 
        alt={ob.name} 
      />
      <div id="details">
        <h3>{ob.name}</h3>
        <p>{ob.description}</p>
        <p><strong>Capacity:</strong> {ob.capacity}</p>
        <p><strong>Unit:</strong> {ob.unit_of_measurement}</p>
        <p><strong>Units/Packet:</strong> {ob.units_per_packet}</p>
        <p><strong>Case Config:</strong> {ob.case_config}</p>
        <h4>₹ {ob.price}</h4>
      </div>
    </div>
  );

  return (
    <div id="mainContainer">
      <h1>All Products</h1>
      <div id="containerClothing">
        {contentTitle.map((item) => dynamicProductSection(item))}
      </div>
    </div>
  );
};

export default Content;

