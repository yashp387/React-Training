import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { withAuth } from "../hoc/withAuth";
import { useDebounceFn, useDebounceValue } from "../hooks/useDebounce";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <AuthStatus />

      <div>
        <ProtectedProfileWithAuth />
        <DebounceDemo />
      </div>
    </div>
  );
}
const ProtectedProfile = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h3>Profile</h3>
      <p>{user?.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const ProtectedProfileWithAuth = withAuth(ProtectedProfile);

const DebounceDemo = () => {
  const [val, setVal] = useState("");
  const [count, setCount] = useState(0);

  const debouncedVal = useDebounceValue(val, 500);
  const debounceClick = useDebounceFn(() => setCount((c) => c + 1), 1000);

  return (
    <div>
      <h2>Debounce Demo</h2>

      <input
        type="text"
        value={val}
        placeholder="Type something"
        onChange={(e) => setVal(e.target.value)}
      />

      <p>
        Debounced value: <strong>{debouncedVal}</strong>
      </p>

      <button onClick={debounceClick}>Click (debounced)</button>
      <p>Clicks: {count}</p>
    </div>
  );
};

const AuthStatus = () => {
  const { isAuthenticated, login, logout, user } = useAuth();
  const [name, setName] = useState("user");

  if (isAuthenticated) {
    return (
      <div>
        <span>Welcome, {user.name}</span>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <button onClick={() => login(name)}>Login</button>
    </div>
  );
};
