import React, { useState } from "react";

function Payment() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Input value: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input-field">Add AsiaCell Pin Code:</label>
      <input
        type="text"
        id="input-field"
        name="input-field"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Payment;
