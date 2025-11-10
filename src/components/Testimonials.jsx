import React from 'react';

const testimonialData = [
  {
    quote: "App này thực sự đã thay đổi cách tôi chăm sóc Milo. Từ việc mua đồ ăn đến đặt lịch khám, mọi thứ đều quá tiện lợi. Tính năng nhắc lịch tiêm phòng cực kỳ hữu ích!",
    name: "Nguyễn Minh Anh",
    rating: "★★★★★"
  },
  {
    quote: "Mua sắm cho Luna chưa bao giờ dễ dàng hơn thế. Sản phẩm đa dạng, giá cả hợp lý, giao hàng siêu nhanh. Đặc biệt là dịch vụ tư vấn bác sĩ online rất chuyên nghiệp.",
    name: "Trần Văn Bình",
    rating: "★★★★★"
  },
  {
    quote: "Cộng đồng trong app rất nhiệt tình và thân thiện. Tôi đã học được rất nhiều kinh nghiệm nuôi mèo từ các thành viên khác. Lucky của tôi giờ khỏe mạnh hơn hẳn!",
    name: "Lê Thị Cẩm",
    rating: "★★★★★"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2 className="section-title">Khách Hàng Nói Gì</h2>
      <p className="section-subtitle">Hơn 50,000 người đã tin tưởng CareNest</p>
      <div className="testimonials-grid">
        {testimonialData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p>{testimonial.quote}</p>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <div className="author-name">{testimonial.name}</div>
                <div className="author-rating">{testimonial.rating}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;