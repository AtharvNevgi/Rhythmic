import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div>
      <h1>🎵 Rhythmic Dashboard</h1>
      <p>Welcome, {user?.email}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}