import { useState } from "react";


export default function Form({ onAddItems }) {
  // Create a state variable to hold the description of the item
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Create a function to handle the form submission
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  // Return the form JSX
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍trip?</h3>
      {/* Create a select element with 20 options */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* Create an input element to enter the item */}
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {/* Create a button to add the item */}
      <button>Add</button>
    </form>
  );
}
