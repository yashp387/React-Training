// 3. useEffect dependency
// Build a small “user by ID” viewer: one state for `userId`, one for `user`. Use `useEffect` to fetch when`userId`changes. Include cleanup so that if the request finishes after `userId` changed or the component unmounted, you don’t call `setUser`.

import { useState, useEffect } from "react";

function UserViewer() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.log(err);
        }
      });

    return () => {
      controller.abort();
    };
  }, [userId]);

  return (
    <div>
      <h2>User Viewer</h2>

      <button onClick={() => setUserId(1)}>user 1</button>
      <button onClick={() => setUserId(2)}>user 2</button>
      <button onClick={() => setUserId(3)}>user 3</button>
      <button onClick={() => setUserId(4)}>user 4</button>
      <button onClick={() => setUserId(5)}>user 5</button>

      {user && (
        <div>
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
          <p>username: {user.username}</p>
        </div>
      )}
    </div>
  );
}

export default UserViewer;
