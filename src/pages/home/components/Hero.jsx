import "./Hero.css"
import veganFoodImg from '../../../assets/image/VeganFood.jpg';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Thực phẩm chay ngon & bổ dưỡng</h1>
          <p>
            Khám phá thế giới ẩm thực chay đa dạng với những món ăn tươi ngon, được chế biến từ nguyên liệu tự nhiên
            100%
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Xem thực đơn</button>
            <button className="btn-secondary">Đặt hàng ngay</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={veganFoodImg}
            alt="Vegan Food"
            style={{ height: 400, width: 500, objectFit: "cover", borderRadius: "16px" }}
          />
        </div>
      </div>
    </section>
  )
}
