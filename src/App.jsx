import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Day 3 – useState</h1>

      {/* Counter */}
      <h2>Counter: {count}</h2>

      {count < 0 && <p style={{ color: "red" }}>Count cannot be negative</p>}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrease
      </button>

      <hr />

      {/* Input form */}
      <h2>Enter your name</h2>
      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name && <p>Hello, {name} 👋</p>}
    </div>
  );
}

export default App;
