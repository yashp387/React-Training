// 1. useState
// Add a new component that has two pieces of state:`name`(string) and `age`(number). Render them and add buttons to increment age and update name from an input.

import { useState } from "react";

function UserInfo() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div>
      <h2>User Information</h2>
      <label>
        Name:{" "}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button onClick={() => setAge((prevAge) => prevAge + 1)}>
        Increment Age
      </button>
      <button onClick={() => setAge((prevAge) => prevAge - 1)}>
        Decrement Age
      </button>
      <button onClick={() => setAge(0)}>Reset Age</button>
      <p>
        Hello {name || "User"}, you are {age}
      </p>
    </div>
  );
}

export default UserInfo;
