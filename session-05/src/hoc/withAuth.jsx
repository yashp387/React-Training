import { useAuth } from "../context/AuthContext";

export function withAuth(WrappedComponent) {
  return (props) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return (
        <div style={{ padding: "1px", border: "1px solid #ccc" }}>
          <p>Access Denied. Please log in.</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}
