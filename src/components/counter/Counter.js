import React, { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <button
        data-testid="removeBtn"
        onClick={() => setValue(value - 1 >= 0 ? value - 1 : value)}
      >
        Reduce
      </button>
      <button data-testid="addBtn" onClick={() => setValue(value + 1)}>
        Add
      </button>
      {value > 3 && (
        <button data-testid="resetBtn" onClick={() => setValue(0)}>
          Reset
        </button>
      )}
      <h1 data-testid="valueHeader">The value is:</h1>
      <p data-testid="value">{value}</p>
    </div>
  );
};

export default Counter;
