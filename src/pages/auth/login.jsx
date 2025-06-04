"use client"

import { useState, useEffect } from "react"
import { jwtDecode } from "jwt-decode"

const CLIENT_ID = "983246949849-9u867h45gdi8110iovgn6jdgmqmf120q.apps.googleusercontent.com"

const Login = () => {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const renderGoogleButton = () => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleCredentialResponse,
      })
      window.google.accounts.id.renderButton(document.getElementById("google-login-button"), {
        theme: "outline",
        size: "large",
        width: 280,
      })
    }
  }

  useEffect(() => {
    const loadGoogleLibrary = () => {
      const script = document.createElement("script")
      script.src = "https://accounts.google.com/gsi/client"
      script.async = true
      script.onload = () => {
        renderGoogleButton()
      }
      document.body.appendChild(script)
    }
    loadGoogleLibrary()

    // Add this to ensure the entire page background is set to #C0EBA6
    document.body.style.backgroundColor = "#C0EBA6"
    document.body.style.margin = "0"
    document.body.style.padding = "0"
    document.documentElement.style.backgroundColor = "#C0EBA6"
    document.documentElement.style.margin = "0"
    document.documentElement.style.padding = "0"

    return () => {
      // Clean up when component unmounts
      document.body.style.backgroundColor = ""
      document.body.style.margin = ""
      document.body.style.padding = ""
      document.documentElement.style.backgroundColor = ""
      document.documentElement.style.margin = ""
      document.documentElement.style.padding = ""
    }
  }, [])

  useEffect(() => {
    if (!user) {
      renderGoogleButton()
    }
  }, [user])

  const handleCredentialResponse = (response) => {
    const decoded = jwtDecode(response.credential)
    setUser(decoded)
  }

  const handleLogout = () => {
    setUser(null)
    setEmail("")
    setPassword("")
  }

  const handleManualLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Logging in with:", { email, password })
      setUser({
        email,
        name: email.split("@")[0],
        sub: "manual-login-" + Date.now(),
        picture: `https://api.dicebear.com/7.x/initials/svg?seed=${email}`,
      })
      setIsLoading(false)
    }, 800)
  }

  // Common styles
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#C0EBA6", // Solid color background
      color: "#1A3C34",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      width: "100%",
      boxSizing: "border-box",
    },
    card: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      padding: "30px",
      borderRadius: "16px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "450px",
      textAlign: "center",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      boxSizing: "border-box",
    },
    title: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#1A3C34",
      marginBottom: "8px",
      background: "linear-gradient(to right, #1A3C34, #4CAF50)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    subtitle: {
      fontSize: "1rem",
      color: "#666",
      marginBottom: "30px",
    },
    formGroup: {
      marginBottom: "20px",
      textAlign: "left",
      boxSizing: "border-box",
      width: "100%",
    },
    label: {
      color: "#1A3C34",
      display: "block",
      marginBottom: "8px",
      fontWeight: "500",
      fontSize: "0.9rem",
    },
    inputContainer: {
      position: "relative",
      width: "100%",
      boxSizing: "border-box",
    },
    input: {
      width: "100%",
      padding: "12px 40px 12px 40px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "1rem",
      outline: "none",
      transition: "all 0.3s ease",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      boxSizing: "border-box",
    },
    inputFocus: {
      borderColor: "#4CAF50",
      boxShadow: "0 0 0 2px rgba(76, 175, 80, 0.2)",
    },
    icon: {
      position: "absolute",
      left: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#666",
      width: "18px",
      height: "18px",
      zIndex: 1,
    },
    eyeIcon: {
      position: "absolute",
      right: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#666",
      width: "18px",
      height: "18px",
      cursor: "pointer",
      background: "none",
      border: "none",
      padding: "4px",
      zIndex: 2,
      borderRadius: "4px",
      transition: "background-color 0.2s ease",
    },
    eyeIconHover: {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
    button: {
      width: "100%",
      padding: "14px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
    },
    buttonHover: {
      backgroundColor: "#45a049",
      boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
      transform: "translateY(-1px)",
    },
    divider: {
      display: "flex",
      alignItems: "center",
      margin: "20px 0",
      color: "#666",
    },
    dividerLine: {
      flex: 1,
      height: "1px",
      backgroundColor: "#ddd",
    },
    dividerText: {
      padding: "0 15px",
      fontSize: "0.9rem",
      color: "#666",
    },
    googleButton: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },
    forgotPassword: {
      color: "#4CAF50",
      textDecoration: "none",
      fontSize: "0.9rem",
      marginTop: "10px",
      display: "inline-block",
    },
    userCard: {
      textAlign: "center",
    },
    avatar: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      objectFit: "cover",
      margin: "0 auto 20px",
      border: "4px solid #4CAF50",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    userInfo: {
      backgroundColor: "#f8f9fa",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "12px",
      textAlign: "left",
      border: "1px solid #e9ecef",
    },
    userInfoLabel: {
      fontWeight: "600",
      color: "#495057",
      fontSize: "0.9rem",
      marginBottom: "5px",
      display: "block",
    },
    userInfoValue: {
      color: "#1A3C34",
      fontSize: "1rem",
      wordBreak: "break-all",
      lineHeight: "1.4",
    },
    statusSection: {
      backgroundColor: "#e8f5e8",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "20px",
      border: "1px solid #c3e6c3",
    },
    statusLabel: {
      fontWeight: "600",
      color: "#2d5a2d",
      fontSize: "1rem",
      marginBottom: "8px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    statusIcon: {
      width: "20px",
      height: "20px",
      color: "#4CAF50",
    },
    badge: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "0.85rem",
      fontWeight: "600",
      display: "inline-block",
    },
    tokenContainer: {
      backgroundColor: "#f1f3f4",
      padding: "12px",
      borderRadius: "6px",
      marginTop: "8px",
      border: "1px solid #dadce0",
    },
    tokenLabel: {
      fontWeight: "600",
      color: "#495057",
      fontSize: "0.85rem",
      marginBottom: "6px",
      display: "block",
    },
    tokenValue: {
      color: "#6c757d",
      fontSize: "0.8rem",
      fontFamily: "monospace",
      wordBreak: "break-all",
      lineHeight: "1.3",
      backgroundColor: "#fff",
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #dee2e6",
    },
    logoutButton: {
      backgroundColor: "#fff",
      color: "#f44336",
      border: "1px solid #f44336",
      padding: "12px",
      borderRadius: "8px",
      fontSize: "1rem",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "10px",
      width: "100%",
    },
    logoutButtonHover: {
      backgroundColor: "#fff5f5",
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {!user ? (
          <>
            <h1 style={styles.title}>Welcome back!</h1>
            <p style={styles.subtitle}>Đăng nhập vào tài khoản của bạn để tiếp tục</p>

            {/* Google Login */}
            <div style={styles.googleButton}>
              <div id="google-login-button"></div>
            </div>

            {/* Divider */}
            <div style={styles.divider}>
              <div style={styles.dividerLine}></div>
              <span style={styles.dividerText}>Hoặc đăng nhập với</span>
              <div style={styles.dividerLine}></div>
            </div>

            {/* Manual Login Form */}
            <form onSubmit={handleManualLogin}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email:</label>
                <div style={styles.inputContainer}>
                  {/* Email icon */}
                  <svg
                    style={styles.icon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    style={styles.input}
                    onFocus={(e) => (e.target.style.borderColor = "#4CAF50")}
                    onBlur={(e) => (e.target.style.borderColor = "#ddd")}
                  />
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Mật khẩu:</label>
                <div style={styles.inputContainer}>
                  {/* Lock icon */}
                  <svg
                    style={styles.icon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Nhập mật khẩu"
                    style={styles.input}
                    onFocus={(e) => (e.target.style.borderColor = "#4CAF50")}
                    onBlur={(e) => (e.target.style.borderColor = "#ddd")}
                  />
                  {/* Eye icon for password toggle */}
                  <button
                    type="button"
                    style={styles.eyeIcon}
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.05)")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                style={styles.button}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#45a049"
                  e.target.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.15)"
                  e.target.style.transform = "translateY(-1px)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#4CAF50"
                  e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
                  e.target.style.transform = "translateY(0)"
                }}
                disabled={isLoading}
              >
                {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
              </button>

              <a href="#" style={styles.forgotPassword}>
                Quên mật khẩu?
              </a>
              <a href="/auth/register" style={{ ...styles.forgotPassword, color: "#1A3C34" }}>
                Đăng ký
              </a>
            </form>
          </>
        ) : (
          <div style={styles.userCard}>
            <img
              src={user.picture || `https://api.dicebear.com/7.x/initials/svg?seed=${user.email}`}
              alt={user.name}
              style={styles.avatar}
            />
            <h2 style={styles.title}>Xin chào, {user.name}!</h2>
            <p style={{ ...styles.subtitle, marginBottom: "25px" }}>Bạn đã đăng nhập thành công</p>

            {/* Status Section */}
            <div style={styles.statusSection}>
              <div style={styles.statusLabel}>
                <svg
                  style={styles.statusIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22,4 12,14.01 9,11.01"></polyline>
                </svg>
                Trạng thái:
              </div>
              <span style={styles.badge}>Đã đăng nhập</span>
            </div>

            {/* User Information */}
            <div style={styles.userInfo}>
              <span style={styles.userInfoLabel}>Email:</span>
              <span style={styles.userInfoValue}>{user.email}</span>
            </div>

            <div style={styles.userInfo}>
              <span style={styles.userInfoLabel}>Tên người dùng:</span>
              <span style={styles.userInfoValue}>{user.name}</span>
            </div>

            <div style={styles.userInfo}>
              <span style={styles.userInfoLabel}>Token:</span>
              <div style={styles.tokenContainer}>
                <span style={styles.tokenLabel}>User ID Token:</span>
                <div style={styles.tokenValue}>{user.sub}</div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              style={styles.logoutButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#fff5f5"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#fff"
              }}
            >
              Đăng xuất
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
