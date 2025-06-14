import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import CartPage from './pages/cart/CartPage';
import PaymentPage from './pages/payment/PaymentPage';
import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/profile/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/account/profile" element={<ProfilePage />} />

        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;