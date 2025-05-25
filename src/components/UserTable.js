import React from 'react';

const UserTable = ({ users, onDelete }) => {
  return (
    <table style={{ width: '100%', maxWidth: '600px', margin: '0 auto', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ backgroundColor: '#347928', color: '#FFFBE6' }}>
          <th style={{ padding: '10px', border: '1px solid #C0EBA6' }}>Name</th>
          <th style={{ padding: '10px', border: '1px solid #C0EBA6' }}>Role</th>
          <th style={{ padding: '10px', border: '1px solid #C0EBA6' }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id} style={{ backgroundColor: '#C0EBA6' }}>
            <td style={{ padding: '10px', border: '1px solid #347928', textAlign: 'center' }}>{user.name}</td>
            <td style={{ padding: '10px', border: '1px solid #347928', textAlign: 'center' }}>{user.role}</td>
            <td style={{ padding: '10px', border: '1px solid #347928', textAlign: 'center' }}>
              <button
                onClick={() => onDelete(user.id)}
                style={{
                  backgroundColor: '#FCCD2A',
                  color: '#347928',
                  padding: '5px 10px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#C0EBA6')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#FCCD2A')}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;