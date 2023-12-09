import { useState } from "react";

export function Form({ addNewItem }) {
  const [desc, setDes] = useState("");
  const [count, setCount] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!desc) return;

    const newItem = {
      description: desc,
      quantity: count,
      id: Date.now(),
    };
    addNewItem(newItem);
    setDes("");
    setCount(1);
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for your trip?</h3>
      <select value={count} onChange={(e) => setCount(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
          <option value={number}>{number}</option>
        ))}
      </select>
      <input
        type="text"
        value={desc}
        onChange={(e) => setDes(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
