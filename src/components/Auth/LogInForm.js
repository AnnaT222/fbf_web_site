import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../api/useAuth";
import "./LogInForm.css";

function LoginForm() {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(email, password);
      navigate("/"); // ✅ Redirect to main page after successful login
    } catch (err) {
      const msg = err?.response?.data?.detail || "Login failed.";
      setError(msg);
    }
  };

  return (
    <form onSubmit={submitHandler} className="login-form">
      <h2>Login</h2>

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

      {error && <div className="error">{error}</div>}

      <button type="submit">Login</button>

      <button
        type="button"
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Back to Main Page
      </button>
    </form>
  );
}

export default LoginForm;
