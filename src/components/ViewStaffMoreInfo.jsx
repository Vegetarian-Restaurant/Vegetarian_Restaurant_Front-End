import React from 'react';

const ViewStaffMoreInfo = () => {
  const staff = [
    { id: 1, name: 'Nguyen Van A', details: 'Joined: 2023, Dept: Kitchen' },
  ];

  return (
    <div className="view-staff-more-info">
      <h2>View Staff More Info</h2>
      <ul>
        {staff.map(staffMember => (
          <li key={staffMember.id}>
            {staffMember.name} - {staffMember.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewStaffMoreInfo;