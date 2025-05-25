import React, { useState, useEffect } from 'react';
import EmployeeFilter from '../../components/EmployeeFilter';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = [
        { id: 1, name: 'John', position: 'waiter' },
        { id: 2, name: 'Anna', position: 'chef' },
        { id: 3, name: 'Mike', position: 'manager' },
      ];
      setEmployees(data);
      setFilteredEmployees(data);
    };
    fetchEmployees();
  }, []);

  const handleFilter = (filters) => {
    const { position } = filters;
    if (!position) {
      setFilteredEmployees(employees);
    } else {
      setFilteredEmployees(employees.filter(emp => emp.position === position));
    }
  };

  return (
    <div style={{ backgroundColor: '#FFFBE6', minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ color: '#347928', textAlign: 'center' }}>Employee List</h2>
      <EmployeeFilter onFilter={handleFilter} />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredEmployees.map(emp => (
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

export default EmployeeList;