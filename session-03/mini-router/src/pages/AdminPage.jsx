import { useAuth } from "../context/AuthContext";

export default function Admin() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Admin page</h1>
      <p>
        Welcome,<strong>{user?.name}</strong>. Admin User. You have full admin
        access.
      </p>
    </div>
  );
}
