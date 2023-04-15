import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const handleCount = (num) => {
    setCount((currentCount) => {
      return currentCount + num;
    });
  };
  return (
    <div>
      <div>
        <button onClick={() => handleCount(+1)}>+</button>
        <p>{count}</p>
      </div>
    </div>
  );
};
export default Count;
