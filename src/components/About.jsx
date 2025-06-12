import "./About.css"

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>Về VeganFood</h2>
          <p>
            Chúng tôi tin rằng thực phẩm chay không chỉ tốt cho sức khỏe mà còn thân thiện với môi trường. Với hơn 5 năm
            kinh nghiệm, VeganFood cam kết mang đến những món ăn chay ngon miệng, bổ dưỡng và đa dạng.
          </p>
          <div className="features">
            <div className="feature">
              <span className="feature-icon">🌱</span>
              <h3>100% Tự nhiên</h3>
              <p>Tất cả nguyên liệu đều từ thiên nhiên, không chất bảo quản</p>
            </div>
            <div className="feature">
              <span className="feature-icon">💚</span>
              <h3>Thân thiện môi trường</h3>
              <p>Góp phần bảo vệ hành tinh xanh cho thế hệ tương lai</p>
            </div>
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <h3>Giao hàng nhanh</h3>
              <p>Giao hàng trong vòng 30 phút tại khu vực nội thành</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src="/placeholder.svg?height=400&width=500" alt="About VeganFood" />
        </div>
      </div>
    </section>
  )
}
