import React from "react";

function Home() {
    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #e0ffe0 0%, #fffbe6 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px 0"
        }}>
            <h1 style={{
                color: "#388e3c",
                fontSize: "3rem",
                marginBottom: "10px",
                fontFamily: "Segoe UI, sans-serif"
            }}>
                Vegetarian Restaurant
            </h1>
            <p style={{
                color: "#555",
                fontSize: "1.3rem",
                marginBottom: "30px"
            }}>
                Đặt món ăn chay ngon, giao tận nơi!
            </p>
            <div style={{
                display: "flex",
                gap: "30px",
                flexWrap: "wrap",
                justifyContent: "center"
            }}>
                {/* Card món ăn mẫu */}
                <div style={{
                    background: "#fff",
                    borderRadius: "16px",
                    boxShadow: "0 4px 16px rgba(60, 120, 60, 0.08)",
                    width: "260px",
                    padding: "20px",
                    textAlign: "center"
                }}>
                    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
                        alt="Món ăn chay"
                        style={{ width: "100%", borderRadius: "12px", marginBottom: "15px" }}
                    />
                    <h3 style={{ color: "#388e3c", margin: "10px 0 5px" }}>Cơm chay thập cẩm</h3>
                    <p style={{ color: "#888", marginBottom: "10px" }}>Ngon miệng, thanh đạm, giàu dinh dưỡng.</p>
                    <button style={{
                        background: "#388e3c",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        padding: "10px 24px",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}>
                        Đặt ngay
                    </button>
                </div>
                {/* Thêm nhiều card món ăn khác nếu muốn */}
                <div style={{
                    background: "#fff",
                    borderRadius: "16px",
                    boxShadow: "0 4px 16px rgba(60, 120, 60, 0.08)",
                    width: "260px",
                    padding: "20px",
                    textAlign: "center"
                }}>
                    <img src="https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80"
                        alt="Món ăn chay"
                        style={{ width: "100%", borderRadius: "12px", marginBottom: "15px" }}
                    />
                    <h3 style={{ color: "#388e3c", margin: "10px 0 5px" }}>Bún chay rau củ</h3>
                    <p style={{ color: "#888", marginBottom: "10px" }}>Thanh mát, bổ dưỡng, phù hợp mọi lứa tuổi.</p>
                    <button style={{
                        background: "#388e3c",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        padding: "10px 24px",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}>
                        Đặt ngay
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;