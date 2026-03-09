import { useState } from "react";
import "./App.css";
import UserInfo from "./components/UserInfo";
import Timer from "./components/Timer";
import UserViewer from "./components/UserViewer";
import { ThemeContext } from "./context/ThemeContext";
import ThemeDisplay from "./components/ThemeDisplay";
import WindowWidth from "./components/WindowWidth";

function App() {
  const [showTimer, setShowTimer] = useState(true);
  const [theme, setTheme] = useState("Light");
  return (
    <div>
      <UserInfo />

      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>

      {showTimer && <Timer />}

      <UserViewer />

      <ThemeContext.Provider value={theme}>
        <div>
          <h2>Display Theme</h2>
          <button onClick={() => setTheme("Light")}>Light</button>
          <button onClick={() => setTheme("Dark")}>Dark</button>

          <ThemeDisplay />
        </div>
      </ThemeContext.Provider>

      <WindowWidth />
    </div>
  );
}

export default App;
