import React, { useState } from 'react';

const EmployeeSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div style={{ display: 'flex', gap: '10px', maxWidth: '400px', margin: '0 auto 20px' }}>
      <label style={{ color: '#347928' }}>Search: </label>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          backgroundColor: '#C0EBA6',
          border: '1px solid #347928',
          padding: '8px',
          borderRadius: '5px',
          flex: 1,
        }}
      />
      <button
        onClick={handleSearch}
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
        Search
      </button>
    </div>
  );
};

export default EmployeeSearch;