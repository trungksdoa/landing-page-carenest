import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock names để che tên user
  const mockNames = ['Nguyễn Minh Anh', 'Trần Văn Bình', 'Lê Thị Cẩm', 'Phạm Hương', 'Đỗ Việt'];

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://exotic-rosene-nghi-dna-e732b270.koyeb.app/api/review?pageIndex=1&pageSize=3&sortDirection=asc');
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data.data.items.slice(0, 3)); // Lấy 3 review đầu tiên
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const getRandomName = (index) => {
    return mockNames[index % mockNames.length];
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? '#FFB400' : '#ddd', fontSize: '18px' }}>
          ★
        </span>
      );
    }
    return stars;
  };

  const getAvatarColor = (index) => {
    const colors = ['#FF9A9E', '#FAB1A0', '#FFA502', '#FFC93C', '#FFE66D'];
    return colors[index % colors.length];
  };

  if (loading) return <div style={{ textAlign: 'center', padding: '50px' }}>Loading reviews...</div>;
  if (error) return <div style={{ textAlign: 'center', padding: '50px' }}>Error: {error}</div>;

  return (
    <section id="reviews" style={{ padding: '60px 20px', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '15px', fontSize: '36px', color: '#1a1a1a', fontWeight: 'bold' }}>
        Khách Hàng Nói Gì
      </h2>
      <p style={{ textAlign: 'center', marginBottom: '50px', fontSize: '16px', color: '#666' }}>
        Hơn 50,000 người đã tin tưởng CareNest
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        {reviews.map((review, index) => (
          <div
            key={review.id}
            style={{
              border: '3px solid #FF6B9D',
              borderRadius: '12px',
              padding: '30px',
              width: '320px',
              backgroundColor: '#FFF5F9',
              position: 'relative',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}
          >
            {/* Quote icon */}
            <div style={{ fontSize: '30px', color: '#FFB4D4', marginBottom: '15px' }}>❝</div>

            {/* Review content */}
            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', marginBottom: '20px', fontStyle: 'italic', minHeight: '80px' }}>
              {review.contents}
            </p>

            {/* User info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              {/* Avatar */}
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: getAvatarColor(index),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  flexShrink: 0,
                }}
              >
                {getRandomName(index)[0]}
              </div>

              {/* User details */}
              <div>
                <div style={{ fontWeight: 'bold', color: '#1a1a1a', marginBottom: '5px' }}>
                  {getRandomName(index)}
                </div>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;