import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../../api/authService";
import "./AuthTabs.css";

function AuthTabs() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        await signup(email, password, rePassword);
      }
      navigate("/"); // ✅ Վերադարձ գլխավոր էջ
    } catch (err) {
      const msg = err?.response?.data?.detail || "Something went wrong";
      setError(msg);
    }
  };

  return (
    <div className="auth-tabs">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Main Page
      </button>

      <div className="auth-tabs-toggle">
        <button
          className={mode === "login" ? "active" : ""}
          onClick={() => {
            setMode("login");
            setError("");
          }}
        >
          Login
        </button>
        <button
          className={mode === "signup" ? "active" : ""}
          onClick={() => {
            setMode("signup");
            setError("");
          }}
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={handleSubmit} className="auth-tabs-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        {mode === "signup" && (
          <input
            type="password"
            placeholder="Repeat Password"
            value={rePassword}
            required
            onChange={(e) => setRePassword(e.target.value)}
          />
        )}

        {error && <div className="error-msg">{error}</div>}

        <button type="submit">{mode === "login" ? "Login" : "Sign Up"}</button>
      </form>
    </div>
  );
}

export default AuthTabs;
