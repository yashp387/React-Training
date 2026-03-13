// 4. useContext
// In the sandbox, add a context (e.g.`ThemeContext`or`UserContext`), wrap part of the app in a Provider, and build a child component that reads the value with`useContext`and displays it (e.g. theme name or user name).

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeDisplay() {
    const theme = useContext(ThemeContext);

    return <h2>Current theme: {theme}</h2>
}

export default ThemeDisplay;