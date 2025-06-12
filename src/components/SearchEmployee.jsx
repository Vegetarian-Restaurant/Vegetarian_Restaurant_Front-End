import React, { useState } from 'react';

const SearchEmployee = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const employees = [
    { id: 1, name: 'Nguyen Van A', role: 'Chef' },
    { id: 2, name: 'Tran Thi B', role: 'Waiter' },
  ];

  const searchResult = employees.find(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-employee">
      <h2>Search Employee</h2>
      <input
        type="text"
        placeholder="Enter employee name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchResult && (
        <div>
          <p>Name: {searchResult.name}</p>
          <p>Role: {searchResult.role}</p>
        </div>
      )}
    </div>
  );
};

export default SearchEmployee;