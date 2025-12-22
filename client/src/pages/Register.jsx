import { supabase } from "../lib/supabase";

export default function Register() {
  const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: "testuser@gmail.com",
      password: "Test@1234",
    });

    if (error) {
      console.error(error);
      alert(error.message);
    } else {
      alert("Account created successfully");
      console.log(data);
    }
  };

  return <button onClick={handleRegister}>Register</button>;
}