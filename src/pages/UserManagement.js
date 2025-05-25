import React, { useState, useEffect } from 'react';
import UserTable from '../components/UserTable';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = [
        { id: 1, name: 'John', role: 'admin' },
        { id: 2, name: 'Anna', role: 'staff' },
      ];
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div style={{ backgroundColor: '#FFFBE6', minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ color: '#347928', textAlign: 'center' }}>User Management</h2>
      <UserTable users={users} onDelete={handleDelete} />
    </div>
  );
};

export default UserManagement;