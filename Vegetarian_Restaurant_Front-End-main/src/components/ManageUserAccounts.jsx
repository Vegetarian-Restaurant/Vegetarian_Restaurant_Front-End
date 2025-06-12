import React, { useState } from 'react';

const ManageUserAccounts = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Nguyen Van A', role: 'Admin' },
    { id: 2, name: 'Tran Thi B', role: 'Staff' },
  ]);
  const [newUser, setNewUser] = useState({ name: '', role: '' });

  const handleAddUser = () => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setNewUser({ name: '', role: '' });
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="manage-user-accounts">
      <h2>Manage User Accounts</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.role}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUserAccounts;