import React, { useState } from 'react';

const CreateEmployeeForm = ({ onCreate }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ id: Date.now(), name, position });
    setName('');
    setPosition('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: '0 auto' }}>
      <label style={{ color: '#347928' }}>Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{
          backgroundColor: '#C0EBA6',
          border: '1px solid #347928',
          padding: '8px',
          borderRadius: '5px',
        }}
      />
      <label style={{ color: '#347928' }}>Position: </label>
      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
        style={{
          backgroundColor: '#C0EBA6',
          border: '1px solid #347928',
          padding: '8px',
          borderRadius: '5px',
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: '#FCCD2A',
          color: '#347928',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#C0EBA6')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#FCCD2A')}
      >
        Create
      </button>
    </form>
  );
};

export default CreateEmployeeForm;