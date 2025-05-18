import React, { useEffect, useState } from "react";
import "../Styles/CSS/cart.css";

const Cart = () => {
  const [contentTitle, setContentTitle] = useState([]);
  const [cartElements, setCartElements] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => res.json())
      .then((data) => {
        setContentTitle(data);
        const cookie = document.cookie;

        if (cookie.indexOf(",counter=") >= 0) {
          const counterVal = Number(cookie.split(",")[1].split("=")[1]);
          setCounter(counterVal);
        }

        const items = cookie.split(",")[0].split("=")[1].split(" ").map(Number);
        let finalElements = [];
        let total = 0;

        for (let i = 0; i < items.length; i++) {
          let itemCounter = 1;
          for (let j = i + 1; j < items.length; j++) {
            if (items[i] === items[j]) {
              itemCounter++;
            }
          }

          total += data[items[i] - 1].price * itemCounter;
          finalElements.push({ ob: data[items[i] - 1], itemCounter });
          i += itemCounter - 1;
        }

        setCartElements(finalElements);
        setTotalAmount(total);
      });
  }, []);

  const dynamicCartSection = (ob, itemCounter) => (
    <div id="box" key={ob.id}>
      <img src={ob.preview} alt={ob.name} />
      <h3>{ob.name + " × " + itemCounter}</h3>
      <h4>{"Amount: Rs" + ob.price}</h4>
    </div>
  );

  return (
    <div id="cartMainContainer">
      <h1>Checkout</h1>
      <h3 id="totalItem">Total Items: {counter}</h3>

      <div id="cartContainer">
        <div id="boxContainer">
          {cartElements.map(({ ob, itemCounter }) => dynamicCartSection(ob, itemCounter))}
        </div>

        <div id="totalContainer">
          <div id="total">
            <h2>Total Amount</h2>
            <h4>{"Amount: Rs " + totalAmount}</h4>
            <div id="button">
              <button onClick={() => console.log("clicked")}> 
                <a href="/orderPlaced.html?">Place Order</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
