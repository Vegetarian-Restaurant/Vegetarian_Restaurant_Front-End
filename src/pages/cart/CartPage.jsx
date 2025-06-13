import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import metaData from '../../data/meal_data.json';

// CartItem Component
const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div key={item.id} className="cart-item">
    <img src={item.image} alt={item.name} />
    <div className="item-details">
      <h4>{item.name}</h4>
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
const CartSummary = ({ subtotal, shippingFee = 30000, cartItems }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/payment', {
      state: {
        cartItems,
        subtotal,
        shippingFee
      }
    });
  };

  const handleContinueBuy = () => {
    navigate('/');
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
      <button className="continue-shopping" onClick={handleContinueBuy}>Tiếp tục mua hàng</button>
    </div>
  );
};

// Main CartPage Component
const CartPage = () => {
  const [cartItems, setCartItems] = useState(
    metaData.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image || "/placeholder.svg?height=80&width=80"
    }))
  );

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
          <CartSummary
            subtotal={total}
            cartItems={cartItems}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;