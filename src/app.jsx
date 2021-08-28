import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 3, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 3, id: 5, name: "Ненужные вещи" },
    { value: 0, id: 6, name: "Ваза" }
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = id => {
    const newCounters = counters.filter(item => item.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };
  const handleIncrement = id => {
    const newCounters = counters.map(item => {
      if (item.id === id) {
        item.value++;
      }
      return item;
    });
    setCounters(newCounters);
  };
  const handleDecrement = id => {
    const newCounters = counters.map(item => {
      if (item.id === id && item.value > 0) {
        item.value--;
      }
      return item;
    });
    setCounters(newCounters);
  };
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
