import { useState } from "react";
function Counter() {
  const [count, setcount] = useState(0);

  return (
    <>
      <h1>counter</h1>

      <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>update counter</button>
    </>
  );
}

export default Counter;
