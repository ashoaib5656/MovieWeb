import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router";

const Login = () => {

  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (email === "user@me.com") {
      localStorage.setItem("token", "dummy-token-123");
      navigate("/");
    } else {
      alert("Invalid email. Please use user@me.com");
    }
  };

  return (
    <div className="main-container">
      <div className="signup">
        <form>
          <label>Login</label>
          <input
            className="login_inp"
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
