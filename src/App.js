import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [value2, setValue2] = useState("");

  const increment = () => {
    setValue2(value2 + "q")
  }

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Int {count}</button>
      <button onClick={increment}>Sring {value2}</button>
    </div>
  );
}

export default App;
