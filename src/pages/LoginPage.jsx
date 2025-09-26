
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./LoginPage.css";

// const LoginPage = () => {
//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");
//   const [remember, setRemember] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!userId || !password) {
//       setError("Please enter both User ID and Password.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch("https://your-backend.com/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ userId, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("token", data.token);

//         alert("Logged in successfully!");
//         navigate("/dashboard"); // redirect to dashboard page
//       } else {
//         setError(data.message || "Invalid User ID or Password.");
//       }
//     } catch (err) {
//       setError("Server error. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       {/* Left Section */}
//       <div className="left-section">
//         <h1>Koala Workspace ....</h1>
//       </div>

//       {/* Right Section */}
//       <div className="right-section">
//         <form className="login-form" onSubmit={handleSubmit}>
//           <h2 className="welcome">Login</h2>
//           <p className="welcome-text">Glad You're back.!</p>

//           {/* Error message */}
//           {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

//           <input
//             type="text"
//             placeholder="User ID"
//             value={userId}
//             onChange={(e) => setUserId(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <div className="remember-me">
//             <input
//               type="checkbox"
//               checked={remember}
//               onChange={(e) => setRemember(e.target.checked)}
//             />
//             <label>Remember me</label>
//           </div>

//           <button type="submit" disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//           <Link to="/forgot-password" className="forgot-link">
//             Forgot password?
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;













import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const useMockLogin = true; 

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userId || !password) {
            setError("Please enter both User ID and Password.");
            return;
        }

        setLoading(true);
        setError("");

           if (useMockLogin) {
                console.log("login for testing...");
            
            setTimeout(() => {
                localStorage.setItem("token", "dummy-token-for-testing");
                setLoading(false);
                alert("Login successful");
                navigate("/dashboard");
            }, 1500);

        } else {
                console.log("Attempting to connect to real backend...");

            try {
                const response = await fetch("https://backend.com/api/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userId, password }),
                });

                const data = await response.json();

                if (response.ok) {
                    localStorage.setItem("token", data.token);
                    alert("Logged in successfully!");
                    navigate("/dashboard"); // redirect to dashboard page
                } else {
                    setError(data.message || "Invalid User ID or Password.");
                }
            } catch (err) {
                setError("Server error. Please try again later.");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="login-container">
            {/* Left Section */}
            <div className="left-section">
                <h1>Koala Workspace ....</h1>
            </div>

            {/* Right Section */}
            <div className="right-section">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 className="welcome">Login</h2>
                    <p className="welcome-text">Glad You're back.!</p>

                    {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

                    <input
                        type="text"
                        placeholder="User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="remember-me">
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                        />
                        <label>Remember me</label>
                    </div>

                    <button type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
                    <Link to="/forgot-password" className="forgot-link">
                        Forgot password?
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;









