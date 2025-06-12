"use client"

import { useState } from "react"

const ManageStaff = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const staffMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "Head Chef",
      email: "john@vegetarian.com",
      phone: "+1 234-567-8901",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Sous Chef",
      email: "jane@vegetarian.com",
      phone: "+1 234-567-8902",
      status: "Active",
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "Server",
      email: "mike@vegetarian.com",
      phone: "+1 234-567-8903",
      status: "Active",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      position: "Manager",
      email: "sarah@vegetarian.com",
      phone: "+1 234-567-8904",
      status: "Inactive",
    },
  ]

  const filteredStaff = staffMembers.filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.position.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <div className="page-header-content">
          <div className="page-info">
            <h3>Staff Management</h3>
            <p>Manage your restaurant staff members</p>
          </div>
          <button className="add-btn">
            <span>➕</span>
            Add Staff Member
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="search-card">
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search staff members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Staff List */}
      <div className="table-card">
        <div className="table-container">
          <table className="data-table">
            <thead className="table-header">
              <tr>
                <th>Staff Member</th>
                <th>Position</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {filteredStaff.map((staff) => (
                <tr key={staff.id}>
                  <td>
                    <div className="user-info">
                      <div className="user-avatar">
                        {staff.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="user-details">
                        <h4>{staff.name}</h4>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>{staff.position}</div>
                  </td>
                  <td>
                    <div className="contact-info">
                      <span>📧</span>
                      {staff.email}
                    </div>
                    <div className="contact-info">
                      <span>📞</span>
                      {staff.phone}
                    </div>
                  </td>
                  <td>
                    <span className={`status-badge ${staff.status === "Active" ? "status-active" : "status-inactive"}`}>
                      {staff.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn edit">
                        <span>✏️</span>
                      </button>
                      <button className="action-btn delete">
                        <span>🗑️</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ManageStaff
