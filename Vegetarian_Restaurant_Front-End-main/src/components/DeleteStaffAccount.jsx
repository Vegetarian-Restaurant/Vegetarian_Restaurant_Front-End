import React, { useState } from 'react';

const DeleteStaffAccount = () => {
  const [staff, setStaff] = useState([
    { id: 1, name: 'Nguyen Van A' },
    { id: 2, name: 'Tran Thi B' },
  ]);
  const [selectedId, setSelectedId] = useState('');

  const handleDelete = () => {
    setStaff(staff.filter(s => s.id !== parseInt(selectedId)));
    setSelectedId('');
  };

  return (
    <div className="delete-staff-account">
      <h2>Delete Staff Account</h2>
      <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">Select Staff</option>
        {staff.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
      </select>
      <button onClick={handleDelete} disabled={!selectedId}>Delete</button>
    </div>
  );
};

export default DeleteStaffAccount;