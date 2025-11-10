import React from 'react';
import qrCode from '../assets/Qr.png';

const CTASection = () => {
  return (
    <section id="download" className="cta-section" style={{ padding: '60px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{ fontSize: '36px', marginBottom: '15px', color: '#1a1a1a' }}>Tải CareNest Ngay Hôm Nay</h2>
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '40px' }}>Miễn phí tải và sử dụng • Ưu đãi 30% cho đơn hàng đầu tiên</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap', maxWidth: '900px', margin: '0 auto' }}>
        {/* QR Code section */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '15px', color: '#1a1a1a' }}>Quét mã QR</p>
          <div style={{ 
            backgroundColor: '#fff', 
            padding: '20px', 
            borderRadius: '12px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'inline-block'
          }}>
            <img 
              src={qrCode}
              alt="CareNest QR Code" 
              style={{ borderRadius: '8px', width: '180px', height: '180px' }}
            />
          </div>
          <p style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>Hoặc quét tại ứng dụng</p>
        </div>

        {/* App buttons section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center' }}>
          <a 
            href="#" 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 24px',
              backgroundColor: '#000',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              minWidth: '240px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#333'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#000'}
          >
            <img 
              src="https://cdn-icons-png.flaticon.com/512/731/731985.png" 
              alt="Apple" 
              style={{ width: '24px', height: '24px' }}
            />
            Tải trên App Store
          </a>
          
          <a 
            href="#" 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 24px',
              backgroundColor: '#1F2937',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              minWidth: '240px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#374151'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#1F2937'}
          >
            <img 
              src="https://cdn-icons-png.flaticon.com/512/888/888857.png" 
              alt="Google Play" 
              style={{ width: '24px', height: '24px' }}
            />
            Tải trên Google Play
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;