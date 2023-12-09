import { useState } from "react";
import "./App.css";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { PackingList } from "./components/PackingList";
import { Status } from "./components/Status";

export default function App() {
  const [packingItems, setPackingItems] = useState([]);
  function addNewItem(newItem) {
    setPackingItems(() => [...packingItems, newItem]);
  }

  function handleDelete(id) {
    setPackingItems((pi) => pi.filter((item) => item.id !== id));
  }

  function toggleItem(id) {
    setPackingItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    setPackingItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addNewItem={addNewItem} />
      <PackingList
        items={packingItems}
        onDeleteItem={handleDelete}
        onUpdate={toggleItem}
        onClearList={handleClearList}
      />
      <Status items={packingItems} />
    </div>
  );
}
