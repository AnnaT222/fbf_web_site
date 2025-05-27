import { useNavigate } from "react-router-dom";
import "./AuthChoice.css";

function AuthChoice() {
  const navigate = useNavigate();

  return (
    <div className="auth-choice-container">
      <h1>Welcome</h1>
      <p>Please select an option to continue</p>
      <div className="auth-choice-buttons">
        <button onClick={() => navigate("/auth/tabs")}>Login</button>
        <button onClick={() => navigate("/auth/tabs")}>Sign Up</button>
      </div>
      <button className="back-to-home" onClick={() => navigate("/")}>
        ← Back to Main Page
      </button>
    </div>
  );
}

export default AuthChoice;
