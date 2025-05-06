import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import GoogleLoginButton from "../../components/GoogleLoginButton";
//import GoogleLogo from "../assets/google-logo.png";
import "../../assets/css/Login.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:28991/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        alert("Login successful");
        navigate(
          data.role === "Admin" ? "/admin/guestlist" : "/user/dashboard"
        );
      } else {
        const result = await response.json();
        setError(result.message || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
  <input
    name="email"
    type="email"
    placeholder="Email"
    value={form.email}
    onChange={handleChange}
    className="login-field"
    required
  />
  <input
    name="password"
    type="password"
    placeholder="Password"
    value={form.password}
    onChange={handleChange}
    className="login-field"
    required
  />
  <button
    type="submit"
    disabled={!form.email || !form.password || loading}
    className="login-button"
  >
    {loading ? "Logging in..." : "Login"}
  </button>
</form>


        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
