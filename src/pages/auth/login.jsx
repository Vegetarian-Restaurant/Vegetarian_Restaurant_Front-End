import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const CLIENT_ID = "983246949849-9u867h45gdi8110iovgn6jdgmqmf120q.apps.googleusercontent.com";

const Login = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const renderGoogleButton = () => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("google-login-button"),
        { theme: "outline", size: "large" }
      );
    }
  };

  useEffect(() => {
    const loadGoogleLibrary = () => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.onload = () => {
        renderGoogleButton();
      };
      document.body.appendChild(script);
    };
    loadGoogleLibrary();
  }, []);

  useEffect(() => {
    if (!user) {
      renderGoogleButton();
    }
  }, [user]);

  const handleCredentialResponse = (response) => {
    const decoded = jwtDecode(response.credential);
    setUser(decoded);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleManualLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    setUser({ email, name: email.split("@")[0], sub: "manual-login" });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#C0EBA6",
        color: "#1A3C34",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#1A3C34",
          marginBottom: "40px",
        }}
      >
        Sign in with Google
      </h1>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        {!user ? (
          <>
            <div
              style={{
                marginBottom: "30px",
              }}
            >
              <div
                id="google-login-button"
                style={{
                  display: "inline-block",
                  padding: "10px",
                  border: "1px solid #1A3C34",
                  borderRadius: "8px",
                  transition: "box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "none")
                }
              ></div>
            </div>
            <div>
              <h3
                style={{
                  color: "#1A3C34",
                  marginBottom: "20px",
                  fontSize: "1.2rem",
                  fontWeight: "500",
                }}
              >
                Sign in with Account
              </h3>
              <form onSubmit={handleManualLogin}>
                <div style={{ marginBottom: "20px", textAlign: "left" }}>
                  <label
                    style={{
                      color: "#1A3C34",
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "500",
                    }}
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #1A3C34",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#4CAF50")}
                    onBlur={(e) => (e.target.style.borderColor = "#1A3C34")}
                  />
                </div>
                <div style={{ marginBottom: "30px", textAlign: "left" }}>
                  <label
                    style={{
                      color: "#1A3C34",
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "500",
                    }}
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #1A3C34",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#4CAF50")}
                    onBlur={(e) => (e.target.style.borderColor = "#1A3C34")}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#45a049")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#4CAF50")
                  }
                >
                  Đăng nhập
                </button>
              </form>
            </div>
          </>
        ) : (
          <div>
            <h3
              style={{
                color: "#1A3C34",
                marginBottom: "20px",
                fontSize: "1.2rem",
                fontWeight: "500",
              }}
            >
              Thông tin người dùng
            </h3>
            <p style={{ color: "#1A3C34", marginBottom: "10px" }}>
              Email: {user.email}
            </p>
            <p style={{ color: "#1A3C34", marginBottom: "10px" }}>
              Tên người dùng: {user.name}
            </p>
            <p style={{ color: "#1A3C34", marginBottom: "20px" }}>
              Token: {user.sub}
            </p>
            <button
              onClick={handleLogout}
              style={{
                padding: "12px 24px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#45a049")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#4CAF50")
              }
            >
              Đăng xuất
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;