import React from 'react';

const productData = [
  {
    title: "Thức Ăn & Dinh Dưỡng",
    description: "Thức ăn hạt, pate, snack và vitamin cho mọi lứa tuổi",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&q=80",
    badge: "Hot"
  },
  {
    title: "Đồ Chơi Thông Minh",
    description: "Đồ chơi vận động, phát triển trí tuệ cho boss",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&q=80",
    badge: "Mới"
  },
  {
    title: "Vệ Sinh & Spa",
    description: "Sữa tắm, dầu gội, lược chải và dụng cụ grooming",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80",
    badge: "Sale"
  },
  {
    title: "Nhà & Nệm Ngủ",
    description: "Chuồng, nệm êm ái cho giấc ngủ ngon của boss",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80",
    badge: null
  },
];

const Products = () => {
  return (
    <section id="products" className="products">
      <h2 className="section-title">Danh Mục Sản Phẩm</h2>
      <p className="section-subtitle">Mọi thứ boss cần đều có tại đây</p>
      <div className="products-grid">
        {productData.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image">
              <img src={product.image} alt={product.title} />
              {product.badge && <div className="product-badge">{product.badge}</div>}
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;