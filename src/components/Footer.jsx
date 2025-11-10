// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>CareNest</h3>
          <p>Nơi mỗi thú cưng đều được yêu thương và chăm sóc như người thân trong gia đình. Chúng tôi tin rằng boss của bạn xứng đáng có những điều tốt nhất.</p>
          <div className="social-links">
            {/* Sử dụng text đơn giản như trong HTML gốc */}
            <a href="#">f</a>
            <a href="#">in</a>
            <a href="#">t</a>
            <a href="#">y</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Khám Phá</h3>
          <ul>
            <li><a href="#features">Dịch vụ</a></li>
            <li><a href="#products">Sản phẩm</a></li>
            <li><a href="#">Bác sĩ thú y</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Hỗ Trợ</h3>
          <ul>
            <li><a href="#">Trung tâm hỗ trợ</a></li>
            <li><a href="#">Chính sách đổi trả</a></li>
            <li><a href="#">Vận chuyển</a></li>
            <li><a href="#">Thanh toán</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Liên Hệ</h3>
          <ul>
            <li><a href="#">hotline@carenest.vn</a></li>
            <li><a href="#">1900 xxxx</a></li>
            <li><a href="#">Hà Nội</a></li>
            <li><a href="#">TP. Hồ Chí Minh</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 CareNest Vietnam. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  );
};

export default Footer;