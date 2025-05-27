import React from "react";
import Login from "./pages/auth/login";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vegetarian Restaurant</h1>
        <Login /> {/* Hiển thị màn hình đăng nhập */}
      </header>
    </div>
  );
}

export default App;
