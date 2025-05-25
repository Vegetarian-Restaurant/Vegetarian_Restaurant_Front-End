
import React, { useState, useEffect } from 'react';

const Revenue = () => {
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    // Giả lập lấy dữ liệu doanh thu từ API
    const fetchRevenue = async () => {
      const data = 5000; // Giả lập doanh thu (ví dụ: 5000 USD)
      setRevenue(data);
    };
    fetchRevenue();
  }, []);

  return (
    <div>
      <h2>Revenue Overview</h2>
      <p>Total Revenue: ${revenue}</p>
    </div>
  );
};

export default Revenue;