import React from 'react';

const CTASection = () => {
  return (
    <section id="download" className="cta-section">
      <h2>Tải CareNest Ngay Hôm Nay</h2>
      <p>Miễn phí tải và sử dụng • Ưu đãi 30% cho đơn hàng đầu tiên</p>
      <div className="app-buttons">
        <a href="#" className="app-btn">
          <img src="https://cdn-icons-png.flaticon.com/512/731/731985.png" alt="Apple" />
          Tải trên App Store
        </a>
        <a href="#" className="app-btn">
          <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="Google Play" />
          Tải trên Google Play
        </a>
      </div>
    </section>
  );
};

export default CTASection;