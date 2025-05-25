// src/pages/employees/EmployeeDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      // Giả lập dữ liệu chi tiết nhân viên
      const data = {
        id: parseInt(id),
        name: 'John Doe',
        position: 'waiter',
        email: 'john@example.com',
        phone: '123-456-7890',
      };
      setEmployee(data);
    };
    fetchEmployee();
  }, [id]);

  if (!employee) return <div>Loading...</div>;

  return (
    <div>
      <h2>Employee Detail</h2>
      <p>Name: {employee.name}</p>
      <p>Position: {employee.position}</p>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
    </div>
  );
};

export default EmployeeDetail;