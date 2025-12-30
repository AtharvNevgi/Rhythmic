import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex-col">
      <h2>Login to Rhythmic</h2>
      <div>
        <input 
          className="border-2 mr-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="bg-blue-500 p-2 mt-3 rounded-2xl text-2xl " type="submit">Login</button>
    </form>
  );
}