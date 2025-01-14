import React, { useState } from "react";
import "./App.css";

const data = [
  { name: "Sugar", price: 40 },
  { name: "Oil", price: 110 },
  { name: "Rice", price: 44 },
];

const App = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [price, setPrice] = useState("0");
  const [weight, setWeight] = useState("0");
  const [total, setTotal] = useState(null);

  const handleSelectChange = (e) => {
    const selectedItemName = e.target.value;
    setSelectedItem(selectedItemName);

      const item = data.find((item) => item.name === selectedItemName);
      setPrice(item.price);
   
  };

  const handleCalculation = () => {
    const totalPrice = (price * weight) / 1000;
    setTotal(totalPrice);
  };

  return (
    <div className="container">
      <h2>Price Calculator</h2>

      <div className="form-group">
        <label htmlFor="item-select">Select Item</label>
        <select
          value={selectedItem}
          onChange={handleSelectChange}
        >
          <option value="">Select an Item</option>
          {data.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="item-price">Price</label>
        <input
          id="item-price"
          type="number"
          placeholder="Item price"
          value={price}
          readOnly
        />
      </div>

      <div className="form-group">
        <label htmlFor="item-weight">Weight grams</label>
        <input
          id="item-weight"
          type="number"
          placeholder="Enter weight in grams"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <button onClick={handleCalculation}>Calculate</button>

      <h3>Total Price: ₹{total}</h3>
    </div>
  );
};

export default App;
