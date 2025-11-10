import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="https://cdn-icons-png.flaticon.com/512/2138/2138440.png" alt="CareNest" />
          CareNest
        </div>
        <ul className="nav-links">
          <li><a href="#features">Dịch Vụ</a></li>
          <li><a href="#products">Sản Phẩm</a></li>
          <li><a href="#testimonials">Khách Hàng</a></li>
          <li><a href="#download">Tải App</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;