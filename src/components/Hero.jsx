import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Chăm Sóc Boss<span>Như Người Thân</span></h1>
          <p>Tất cả những gì bạn cần để mang lại cuộc sống hạnh phúc, khỏe mạnh cho thú cưng - từ mua sắm đến chăm sóc sức khỏe, chỉ trong một ứng dụng.</p>
          <div className="cta-buttons">
            <a href="#download" className="btn btn-primary">Trải Nghiệm Ngay</a>
            <a href="#features" className="btn btn-secondary">Tìm Hiểu Thêm</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80" alt="Happy pets" />
        </div>
      </div>
    </section>
  );
};

export default Hero;