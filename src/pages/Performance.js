import React, { useState, useEffect } from 'react';
import TimeFilter from '../components/TimeFilter';

const Performance = () => {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const data = [
        { id: 1, employee: 'John', date: '2025-05-20', task: 'Serve customers' },
        { id: 2, employee: 'Anna', date: '2025-05-21', task: 'Cook dishes' },
      ];
      setActivities(data);
      setFilteredActivities(data);
    };
    fetchActivities();
  }, []);

  const handleFilter = ({ startDate, endDate }) => {
    const results = activities.filter(activity => {
      const activityDate = new Date(activity.date);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;
      return (!start || activityDate >= start) && (!end || activityDate <= end);
    });
    setFilteredActivities(results);
  };

  return (
    <div style={{ backgroundColor: '#FFFBE6', minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ color: '#347928', textAlign: 'center' }}>Filter by Time</h2>
      <TimeFilter onFilter={handleFilter} />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredActivities.map(activity => (
          <li
            key={activity.id}
            style={{
              backgroundColor: '#C0EBA6',
              padding: '10px',
              margin: '5px 0',
              borderRadius: '5px',
              border: '1px solid #347928',
            }}
          >
            {activity.employee} - {activity.date} - {activity.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Performance;