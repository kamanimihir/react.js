import React, { useState } from 'react';

export default function Counter() {
  const [num, setNum] = useState(0);

  const incriment = () => {
    if (num < 30) {
      setNum(num + 1)
    }
  };

  const dicriment = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  return (
    <>
      <h1>Counter</h1>
      <h3>{num}</h3>
      <button onClick={incriment} disabled={num === 30}>Increment</button>
      <button onClick={dicriment} disabled={num === 0}>Decrement</button>
    </>
  );
}
