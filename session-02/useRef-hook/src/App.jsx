import { useRef, useEffect } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <label htmlFor="comment">Any comment?</label>
      <textarea ref={inputRef} name="comment" rows={4} cols={20}></textarea>
    </div>
  );
}

export default App;
