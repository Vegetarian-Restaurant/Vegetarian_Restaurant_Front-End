import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import CreateEmployee from './pages/employees/CreateEmployee';
import EmployeeList from './pages/employees/EmployeeList';
import EmployeeSearchPage from './pages/employees/EmployeeSearchPage';
import Performance from './pages/Performance';
import UserManagement from './pages/UserManagement';

function App() {
  return (
    <Router>
      {/* Thanh điều hướng */}
      <nav
        style={{
          backgroundColor: '#347928',
          padding: '15px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? '#FCCD2A' : '#FFFBE6',
            textDecoration: 'none',
            fontWeight: 'bold',
            padding: '10px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
          })}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#C0EBA6')}
          onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Home
        </NavLink>
        <NavLink
          to="/create-employee"
          style={({ isActive }) => ({
            color: isActive ? '#FCCD2A' : '#FFFBE6',
            textDecoration: 'none',
            fontWeight: 'bold',
            padding: '10px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
          })}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#C0EBA6')}
          onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Create Employee
        </NavLink>
        <NavLink
          to="/employee-list"
          style={({ isActive }) => ({
            color: isActive ? '#FCCD2A' : '#FFFBE6',
            textDecoration: 'none',
            fontWeight: 'bold',
            padding: '10px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
          })}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#C0EBA6')}
          onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Employee List
        </NavLink>
        <NavLink
          to="/employee-search"
          style={({ isActive }) => ({
            color: isActive ? '#FCCD2A' : '#FFFBE6',
            textDecoration: 'none',
            fontWeight: 'bold',
            padding: '10px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
          })}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#C0EBA6')}
          onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Search Employee
        </NavLink>
        <NavLink
          to="/performance"
          style={({ isActive }) => ({
            color: isActive ? '#FCCD2A' : '#FFFBE6',
            textDecoration: 'none',
            fontWeight: 'bold',
            padding: '10px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
          })}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#C0EBA6')}
          onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Performance
        </NavLink>
        <NavLink
          to="/user-management"
          style={({ isActive }) => ({
            color: isActive ? '#FCCD2A' : '#FFFBE6',
            textDecoration: 'none',
            fontWeight: 'bold',
            padding: '10px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
          })}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#C0EBA6')}
          onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          User Management
        </NavLink>
      </nav>

      {/* Nội dung chính */}
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                backgroundColor: '#FFFBE6',
                minHeight: 'calc(100vh - 70px)', // Trừ chiều cao của thanh điều hướng
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h1 style={{ color: '#347928', fontSize: '48px', textAlign: 'center', marginBottom: '20px' }}>
                Welcome to the App
              </h1>
              <p style={{ color: '#347928', fontSize: '18px', textAlign: 'center' }}>
                Explore our features to manage employees, performance, and more!
              </p>
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <NavLink
                  to="/create-employee"
                  style={{
                    backgroundColor: '#FCCD2A',
                    color: '#347928',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#C0EBA6')}
                  onMouseOut={(e) => (e.target.style.backgroundColor = '#FCCD2A')}
                >
                  Get Started
                </NavLink>
              </div>
            </div>
          }
        />
        <Route path="/create-employee" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="/employee-search" element={<EmployeeSearchPage />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/user-management" element={<UserManagement />} />
      </Routes>
    </Router>
  );
}

export default App;