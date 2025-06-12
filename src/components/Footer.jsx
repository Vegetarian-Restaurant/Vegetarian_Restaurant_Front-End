import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>VeganFood</h3>
            <p>Thực phẩm chay ngon & bổ dưỡng cho cuộc sống khỏe mạnh</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                📘
              </a>
              <a href="#" aria-label="Instagram">
                📷
              </a>
              <a href="#" aria-label="YouTube">
                📺
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Thực đơn</h4>
            <ul>
              <li>
                <a href="#">Món chính</a>
              </li>
              <li>
                <a href="#">Salad & Soup</a>
              </li>
              <li>
                <a href="#">Đồ uống</a>
              </li>
              <li>
                <a href="#">Tráng miệng</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Dịch vụ</h4>
            <ul>
              <li>
                <a href="#">Đặt hàng online</a>
              </li>
              <li>
                <a href="#">Giao hàng tận nơi</a>
              </li>
              <li>
                <a href="#">Catering</a>
              </li>
              <li>
                <a href="#">Hỗ trợ khách hàng</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Liên hệ</h4>
            <div className="contact-info">
              <p>📍 123 Đường ABC, Quận 1, TP.HCM</p>
              <p>📞 (028) 1234 5678</p>
              <p>✉️ info@veganfood.vn</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 VeganFood. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
