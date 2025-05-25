import React, { useState, useEffect } from 'react';
import EmployeeSearch from '../../components/EmployeeSearch';

const EmployeeSearchPage = () => {
  const [employees, setEmployees] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = [
        { id: 1, name: 'John Doe', position: 'waiter' },
        { id: 2, name: 'Anna Smith', position: 'chef' },
        { id: 3, name: 'Mike Johnson', position: 'manager' },
      ];
      setEmployees(data);
      setSearchResults(data);
    };
    fetchEmployees();
  }, []);

  const handleSearch = (searchTerm) => {
    const results = employees.filter(emp =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div style={{ backgroundColor: '#FFFBE6', minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ color: '#347928', textAlign: 'center' }}>Search Employee</h2>
      <EmployeeSearch onSearch={handleSearch} />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {searchResults.map(emp => (
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

export default EmployeeSearchPage;