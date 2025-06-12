import React, { useState } from 'react';

const FilterEmployee = () => {
  const [filterCriteria, setFilterCriteria] = useState('');
  const employees = [
    { id: 1, name: 'Nguyen Van A', department: 'Kitchen' },
    { id: 2, name: 'Tran Thi B', department: 'Service' },
  ];

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(filterCriteria.toLowerCase()) ||
    emp.department.toLowerCase().includes(filterCriteria.toLowerCase())
  );

  return (
    <div className="component-section">
      <h2>Filter Employees</h2>
      <input
        type="text"
        placeholder="Enter filter criteria (name or department)"
        value={filterCriteria}
        onChange={(e) => setFilterCriteria(e.target.value)}
      />
      <ul>
        {filteredEmployees.map(emp => (
          <li key={emp.id}>{emp.name} - {emp.department}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterEmployee;