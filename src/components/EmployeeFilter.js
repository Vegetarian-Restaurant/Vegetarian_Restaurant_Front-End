import React, { useState } from 'react';

const EmployeeFilter = ({ onFilter }) => {
  const [position, setPosition] = useState('');

  const handleFilter = () => {
    onFilter({ position });
  };

  return (
    <div style={{ display: 'flex', gap: '10px', maxWidth: '400px', margin: '0 auto 20px' }}>
      <label style={{ color: '#347928' }}>Position: </label>
      <select
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        style={{
          backgroundColor: '#C0EBA6',
          border: '1px solid #347928',
          padding: '8px',
          borderRadius: '5px',
          flex: 1,
        }}
      >
        <option value="">All</option>
        <option value="waiter">Waiter</option>
        <option value="chef">Chef</option>
        <option value="manager">Manager</option>
      </select>
      <button
        onClick={handleFilter}
        style={{
          backgroundColor: '#FCCD2A',
          color: '#347928',
          padding: '8px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#C0EBA6')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#FCCD2A')}
      >
        Filter
      </button>
    </div>
  );
};

export default EmployeeFilter;