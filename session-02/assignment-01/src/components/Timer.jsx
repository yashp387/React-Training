// 2. useEffect + cleanup
// Create a component that starts a`setInterval`when it mounts, updates a counter every second, and clears the interval in a `useEffect`cleanup. Unmount the component (e.g. toggle with a button) and confirm the interval stops (no console errors or extra ticks).

import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Interval cleared");
    };
  }, []);

  return (
    <div>
      <h2>Timer</h2> Time: {count}
    </div>
  );
}

export default Timer;
