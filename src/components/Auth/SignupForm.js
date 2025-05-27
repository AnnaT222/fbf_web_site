import { useState } from "react";
import { useAuth } from "../../api/useAuth";

function SignupForm() {
  const { handleSignup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await handleSignup(email, password, rePassword);
      alert("Signup successful!");
    } catch (err) {
      alert("Signup failed.");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Repeat Password"
        value={rePassword}
        onChange={(e) => setRePassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
