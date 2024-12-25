import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("Maximum count reached!");
    }
  };

  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Count cannot go negative!");
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <h3>{count}</h3>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App
