import React from 'react';

const ViewRevenue = () => {
  const revenueData = {
    total: 500,
    lastMonth: 450,
    difference: '+10%',
  };

  return (
    <div className="view-revenue">
      <h2>View Revenue</h2>
      <p>Total Revenue: {revenueData.total} Million VND</p>
      <p>Last Month: {revenueData.lastMonth} Million VND</p>
      <p>Difference: {revenueData.difference}</p>
    </div>
  );
};

export default ViewRevenue;