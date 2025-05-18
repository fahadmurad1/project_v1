/*before chat gpt code
import react from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from './components/Cart'; 
import Header from "./components/Header";
import Slider from "./components/Slider";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Login from "./pages/Login";
import ContentDetails from "./components/ContentDetails";


function App() {

  return (
    <>
    <Header />
    
    
    <Slider/>
    <Content/>
    
    <Footer/>
    <Home/>
     




    
    </>
  )
}

export default App*/
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from './components/Cart'; 
import Header from "./components/Header";
import Slider from "./components/Slider";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Login from "./components/Login";
import Register from "./components/Register";
import ContentDetails from "./components/ContentDetails";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Content />
              <Footer />
            </>
          }
        />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/content" element={<Content />} />
         <Route path="/product/:sku" element={<ContentDetails />} />
        <Route path="/details/:sku_code" element={<ContentDetails />} />
<Route path="/register" element={<Register />} />
{/*<Route path="/profile" element={<Profile />} />*/}
        

        {/* Optional extra routes */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
