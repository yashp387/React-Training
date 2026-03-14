import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <p>
          Welcome back, <strong>{user?.name}</strong>!
        </p>
      </div>
      <div className="card">
        <h2>Recent Activity</h2>
        <div>
          <div className="list-item">
            <span>
              Logged in as <strong>{user?.role}</strong>
            </span>
            <span className="label">Just Now</span>
          </div>
          <div className="list-item">
            <span>Profile updated</span>
            <span className="label">2 hours ago</span>
          </div>
        </div>
      </div>
    </>
  );
}
