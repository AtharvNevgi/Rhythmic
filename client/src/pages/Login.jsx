import { supabase } from "../lib/supabase";

export default function Login() {
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: "testuser@gmail.com",
      password: "Test@1234",
    });

    if (error) alert(error.message);
    else alert("Logged in");
  };

  return <button onClick={handleLogin}>Login</button>;
}