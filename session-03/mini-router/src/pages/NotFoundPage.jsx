import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <div className="code">404</div>
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <div className="actions">
        <Link to="/" className="button">Back to home</Link>
      </div>
    </div>
  );
}
