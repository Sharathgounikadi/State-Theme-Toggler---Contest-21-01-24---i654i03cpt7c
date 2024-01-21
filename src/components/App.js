import React, { useState } from "react";
import "../styles/App.css";

export default function App() {
  // Step 1: Initialize a state called "theme" which is toggled between "light" and "dark"
  const [theme, setTheme] = useState("light");

  // Step 2: Toggle the theme between "light" and "dark" when the checkbox is clicked
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`App ${theme}`}>
      <h1>Newton School</h1>
      <div>
        <form>
          <label>UserName</label>
          <input />
          <label>Password</label>
          <input />
          <button>Login</button>
        </form>
      </div>
      <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
      {/* Step 2: Add event handler to the checkbox and associate styles based on the theme */}
      <input type="checkbox" id="switch" onChange={toggleTheme} />
      <label htmlFor="switch" className="label">
        Toggle
      </label>
    </div>
  );
}
