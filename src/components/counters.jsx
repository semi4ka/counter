import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const [counters, setCounts] = useState([
    { value: 0, id: 1, name: "Ложка" },
    { value: 3, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 3, id: 5, name: "Ненужные вещи" },
    { value: 0, id: 6, name: "Ваза" }
  ]);

  return (
    <div>
      {counters.map(counter => (
        <Counter key={counter.id} value={counter.value} name={counter.name} />
      ))}
    </div>
  );
};

export default Counters;
