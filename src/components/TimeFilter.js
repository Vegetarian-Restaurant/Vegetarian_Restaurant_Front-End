import React, { useState } from 'react';

const TimeFilter = ({ onFilter }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFilter = () => {
    onFilter({ startDate, endDate });
  };

  return (
    <div style={{ display: 'flex', gap: '10px', maxWidth: '500px', margin: '0 auto 20px', flexWrap: 'wrap' }}>
      <label style={{ color: '#347928' }}>Start Date: </label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        style={{
          backgroundColor: '#C0EBA6',
          border: '1px solid #347928',
          padding: '8px',
          borderRadius: '5px',
        }}
      />
      <label style={{ color: '#347928' }}>End Date: </label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        style={{
          backgroundColor: '#C0EBA6',
          border: '1px solid #347928',
          padding: '8px',
          borderRadius: '5px',
        }}
      />
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

export default TimeFilter;