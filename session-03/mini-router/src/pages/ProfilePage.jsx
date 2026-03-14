import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="card">
      <h1>My Profile</h1>
      <div className="list-item">
        <span className="label">Avatar</span>
        <div className="value">
          {user?.role === "admin" ? "A" : "U"}
        </div>
      </div>

      <div className="list-item">
        <span className="label">Role</span>
        <span className="value">{user?.role}</span>
      </div>

      <div className="list-item">
        <span className="label">Status</span>
        <span className="value">Active</span>
      </div>
    </div>
  );
}
