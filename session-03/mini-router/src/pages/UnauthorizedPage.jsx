import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Unauthorized() {
  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleSwitchAccount = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <div className="code">403</div>
      <h1>Access Denied</h1>
      <p>You don't have permission to access this page.</p>
      <div className="actions">
        <Link to="/" className="button">Back to Home</Link>
        <button className="button secondary" onClick={handleSwitchAccount}>
          Switch account
        </button>
      </div>
    </div>
  );
}
