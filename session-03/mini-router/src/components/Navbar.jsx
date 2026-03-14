import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>

          {isAuthenticated && (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/profile">Profile</NavLink>
            </>
          )}

          {isAuthenticated && user?.role === "admin" && (
            <NavLink to="/admin">Admin</NavLink>
          )}
        </div>

        <div className="user-section">
          {isAuthenticated ? (
            <div className="user-info">
              <span className="label">
                {user?.name} ({user?.role})
              </span>
              <button onClick={handleLogout} className="button secondary">
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
