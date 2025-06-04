"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const Register = () => {
  const [email, setEmail] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState("")
  const [serverOtp, setServerOtp] = useState("")
  const [success, setSuccess] = useState(false)

  const router = useRouter()

  const handleSendOtp = async () => {
    // Gọi API để kiểm tra và gửi OTP
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString()
    setServerOtp(generatedOtp)

    // Giả lập gửi mail
    alert(`OTP đã được gửi đến email: ${email}\nMã OTP là: ${generatedOtp}`)

    setOtpSent(true)
  }

  const handleVerifyOtp = () => {
    if (otp === serverOtp) {
      alert("Xác minh thành công!")
      setSuccess(true)
      setTimeout(() => router.push("/login"), 2000)
    } else {
      alert("OTP không đúng. Vui lòng thử lại.")
    }
  }

  return (
    <div style={{ padding: "30px", maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Đăng ký tài khoản</h2>
      {!otpSent ? (
        <>
          <p>Nhập email để đăng ký:</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            required
            style={{ padding: "10px", width: "100%", marginBottom: "20px" }}
          />
          <button onClick={handleSendOtp} style={{ padding: "10px", width: "100%" }}>
            Gửi mã OTP
          </button>
        </>
      ) : !success ? (
        <>
          <p>Nhập mã OTP đã được gửi đến email:</p>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Mã OTP"
            style={{ padding: "10px", width: "100%", marginBottom: "20px" }}
          />
          <button onClick={handleVerifyOtp} style={{ padding: "10px", width: "100%" }}>
            Xác minh
          </button>
        </>
      ) : (
        <p>Đăng ký thành công! Đang chuyển hướng về trang đăng nhập...</p>
      )}
    </div>
  )
}

export default Register
