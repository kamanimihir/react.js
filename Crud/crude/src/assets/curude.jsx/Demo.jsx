import React, { useState } from 'react';

export default function Crude() {
  const [item, setItem] = useState([]);  // Initialize item as an empty array
  const [inputvalue, setInputvalue] = useState({
    name: "",
    email: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputvalue({ ...inputvalue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem([...item, inputvalue]);  // Add inputvalue to the item array
    setInputvalue({ name: "", email: "" });  // Clear the input fields
    console.log(inputvalue);  // Log the current input value (for debugging purposes)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Enter Name'
          name='name'
          value={inputvalue.name}
          onChange={handleInput}
        /><br /><br />
        <input
          type="email"
          placeholder='Enter Email'
          name='email'
          value={inputvalue.email}
          onChange={handleInput}
        /><br /><br />
        <button type='submit'>Add data</button>
      </form>
      {/* Display the list of items */}
      <ul>
        {item.map((data, index) => (
          <li key={index}>{data.name} - {data.email}</li>
        ))}
      </ul>
    </>
  );
}
