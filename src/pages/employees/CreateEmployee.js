import React, { useState, useEffect } from 'react';
import CreateEmployeeForm from '../../components/CreateEmployeeForm';

const CreateEmployee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = [
        { id: 1, name: 'John', position: 'waiter' },
      ];
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  const handleCreate = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div style={{ backgroundColor: '#FFFBE6', minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ color: '#347928', textAlign: 'center' }}>Create Employee Account</h2>
      <CreateEmployeeForm onCreate={handleCreate} />
      <h3 style={{ color: '#347928', marginTop: '20px' }}>Employee List</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {employees.map(emp => (
          <li
            key={emp.id}
            style={{
              backgroundColor: '#C0EBA6',
              padding: '10px',
              margin: '5px 0',
              borderRadius: '5px',
              border: '1px solid #347928',
            }}
          >
            {emp.name} - {emp.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateEmployee;