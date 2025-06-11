import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';

// CartItem Component
const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div key={item.id} className="cart-item">
    <img src={item.image} alt={item.name} />
    <div className="item-details">
      <h3>{item.name}</h3>
      <p className="price">{item.price.toLocaleString()}₫</p>
    </div>
    <div className="quantity-controls">
      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
    </div>
    <p className="item-total">{(item.price * item.quantity).toLocaleString()}₫</p>
    <button className="remove-btn" onClick={() => onRemove(item.id)}>×</button>
  </div>
);

// CartSummary Component
const CartSummary = ({ subtotal, shippingFee = 30000 }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/payment');  // Navigate to payment page
  };

  return (
    <div className="cart-summary">
      <h2>Tổng giỏ hàng</h2>
      <div className="summary-row">
        <span>Tạm tính:</span>
        <span>{subtotal.toLocaleString()}₫</span>
      </div>
      <div className="summary-row">
        <span>Phí vận chuyển:</span>
        <span>{shippingFee.toLocaleString()}₫</span>
      </div>
      <div className="summary-row total">
        <span>Tổng cộng:</span>
        <span>{(subtotal + shippingFee).toLocaleString()}₫</span>
      </div>
      <button className="checkout-btn" onClick={handleCheckout}>
        Tiến hành thanh toán
      </button>
      <button className="continue-shopping">Tiếp tục mua hàng</button>
    </div>
  );
};

// Main CartPage Component
const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Burger chay đặc biệt",
      price: 89000,
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80"
    },
    {
      id: 2,
      name: "Phở chay truyền thống",
      price: 65000,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80"
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity >= 1) {
      setCartItems(
        cartItems.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <Header />
      <Banner />
      <main className="cart-container">
        <h1>My Cart</h1>
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))}
          </div>
          <CartSummary subtotal={total} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;