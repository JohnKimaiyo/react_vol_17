import React from "react";
import { useState, useEffect } from "react";

export default function Mycount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`you have clicked the button ${count} times`);
  });

  return (
    <div>
      <h3>
        <p>counting the number of clicks</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </h3>
    </div>
  );
}
