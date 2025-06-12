import React, { useState } from 'react';

const EditStaffPosition = () => {
  const [staff, setStaff] = useState([
    { id: 1, name: 'Nguyen Van A', position: 'Chef' },
  ]);
  const [selectedId, setSelectedId] = useState('');
  const [newPosition, setNewPosition] = useState('');

  const handleEdit = () => {
    setStaff(staff.map(s => s.id === parseInt(selectedId) ? { ...s, position: newPosition } : s));
    setSelectedId('');
    setNewPosition('');
  };

  return (
    <div className="edit-staff-position">
      <h2>Edit Staff Position</h2>
      <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">Select Staff</option>
        {staff.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
      </select>
      <input
        type="text"
        placeholder="New Position"
        value={newPosition}
        onChange={(e) => setNewPosition(e.target.value)}
      />
      <button onClick={handleEdit} disabled={!selectedId || !newPosition}>Update</button>
    </div>
  );
};

export default EditStaffPosition;