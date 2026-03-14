import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <div>
        <h1>Mini Routing App</h1>
        <p>A complete demo of react routing.</p>
        <div className="actions">
          {isAuthenticated ? (
            <Link to="/dashboard" className="button">Go to Dashboard</Link>
          ) : (
            <Link to="/login" className="button">Get started</Link>
          )}
          <Link to="/about" className="button secondary">Learn more</Link>
        </div>
      </div>
    </div>
  );
}
