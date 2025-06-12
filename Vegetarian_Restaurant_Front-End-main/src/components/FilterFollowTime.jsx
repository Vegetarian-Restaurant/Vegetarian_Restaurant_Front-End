import React, { useState } from 'react';

const FilterFollowTime = () => {
  const [timeFilter, setTimeFilter] = useState('');
  const activities = [
    { id: 1, task: 'Order Processing', time: '2025-06-01' },
    { id: 2, task: 'Customer Service', time: '2025-06-02' },
  ];

  const filteredActivities = activities.filter(act =>
    act.time.includes(timeFilter)
  );

  return (
    <div className="filter-follow-time">
      <h2>Filter Follow Time</h2>
      <input
        type="date"
        value={timeFilter}
        onChange={(e) => setTimeFilter(e.target.value)}
      />
      <ul>
        {filteredActivities.map(act => (
          <li key={act.id}>{act.task} - {act.time}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterFollowTime;