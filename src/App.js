import React, { useState } from "react";

const data = [
  { name: "Sugar", price: 40 },
  { name: "Oil", price: 110 },
  { name: "Rice", price: 44 },
];

const App = () => {
  const [selectedItem, setSelectedItem] = useState();
  const [price, setPrice] = useState();
  const [weight, setWeight] = useState('');
  const [total, setTotal] = useState(null);


  const handleSelectChange = (e) => {
    const selectedItemName = e.target.value;
    setSelectedItem(selectedItemName);


    const item = data.find(item => item.name === selectedItemName);
    setPrice(item.price);
  };


  const handleCalculation = () => {
    const totalPrice = price * weight / 1000;
    setTotal(totalPrice);
  };

  return (
    <div>
      <select value={selectedItem} onChange={handleSelectChange}>
        {data.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select><br />

      <input
        type="number"
        placeholder="Item price"
        value={price}
        readOnly
      /><br />
      <input
        type="number"
        placeholder="Item weight in grams"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button onClick={handleCalculation}>Calculate</button>
      <h1>Total Price: {total}</h1>
    </div>
  );
};

export default App;
