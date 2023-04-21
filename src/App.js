import React, { userState } from "react";

function App() {
  const [count, setCount] = userState();
  // const [value2, setValue2] = userState();

  return <div className="App">
        <button onClick={() => setCount(count + 1)}>{count}</button>
  </div>;
}

export default App;
