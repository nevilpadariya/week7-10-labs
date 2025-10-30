import { useState } from "react";

export default function CounterWithReset() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <span aria-live="polite">Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
