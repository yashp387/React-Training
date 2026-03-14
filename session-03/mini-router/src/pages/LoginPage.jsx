import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function LoginPage() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loggingIn, setLoggingIn] = useState(false);

  const from = location.state?.from?.pathname || "/dashboard";

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const handleLogin = async (role) => {
    setLoggingIn(true);
    await login(role);
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <div className="actions">
        <button className="button" onClick={() => handleLogin("user")}>
          {loggingIn ? "Signing in…" : "Login as User"}
        </button>
        <button
          className="button secondary"
          onClick={() => handleLogin("admin")}
        >
          {loggingIn ? "Signing in…" : "Login as Admin"}
        </button>
      </div>
    </div>
  );
}
