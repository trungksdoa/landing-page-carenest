import React from 'react';

const featureData = [
  {
    title: "Cửa Hàng Thú Cưng",
    description: "Hàng ngàn sản phẩm chính hãng từ thức ăn, đồ chơi đến phụ kiện. Giao hàng tận nhà trong 2 giờ.",
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=600&q=80",
    alt: "Pet shopping"
  },
  {
    title: "Nhắc Lịch Thông Minh",
    description: "Không bao giờ quên lịch tiêm phòng, tắm rửa hay uống thuốc của boss với hệ thống nhắc nhở tự động.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&q=80",
    alt: "Pet calendar"
  },
  {
    title: "Tư Vấn Bác Sĩ 24/7",
    description: "Kết nối với bác sĩ thú y chuyên nghiệp qua video call bất cứ lúc nào boss cần.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&q=80",
    alt: "Vet consultation"
  },
  {
    title: "Sổ Sức Khỏe Điện Tử",
    description: "Lưu trữ đầy đủ hồ sơ y tế, theo dõi cân nặng và phát triển của thú cưng theo thời gian.",
    image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&q=80",
    alt: "Health tracking"
  },
  {
    title: "Thư Viện Kiến Thức",
    description: "Video hướng dẫn huấn luyện, bài viết chăm sóc từ các chuyên gia hàng đầu.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    alt: "Pet training"
  },
  {
    title: "Cộng Đồng Pet Lover",
    description: "Kết nối với hàng nghìn người nuôi thú cưng, chia sẻ kinh nghiệm và khoảnh khắc đáng yêu.",
    image: "https://images.unsplash.com/photo-154819997303cce0bbc87b?w=600&q=80",
    alt: "Community"
  },
];

const Features = () => {
  return (
    <section id="features" className="features">
      <h2 className="section-title">Dịch Vụ Của Chúng Tôi</h2>
      <p className="section-subtitle">Giải pháp toàn diện cho mọi nhu cầu của thú cưng</p>
      <div className="features-grid">
        {featureData.map((feature, index) => (
          <div className={`feature-card feature-card:nth-child(${index + 1})`} key={index}>
            <div className="feature-icon">
              <img src={feature.image} alt={feature.alt} />
            </div>
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;