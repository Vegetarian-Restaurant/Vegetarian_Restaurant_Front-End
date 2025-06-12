import React, { useState } from 'react';

const CreateEmployeeAccount = () => {
  const [employee, setEmployee] = useState({ name: '', role: '' });
  const [message, setMessage] = useState('');

  const handleCreate = () => {
    setMessage(`Account created for ${employee.name} as ${employee.role}`);
    setEmployee({ name: '', role: '' });
  };

  return (
    <div className="create-employee-account">
      <h2>Create Employee Account</h2>
      <input
        type="text"
        placeholder="Name"
        value={employee.name}
        onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Role"
        value={employee.role}
        onChange={(e) => setEmployee({ ...employee, role: e.target.value })}
      />
      <button onClick={handleCreate}>Create</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateEmployeeAccount;