import React, { useState } from 'react';
import Sidebar from '../ManagerSidebar/Sidebar.jsx';
import './ManagerFoodList.css';

const initialFoodList = [
  { name: 'Vegetarian Pizza', category: 'Main Course', price: 65000, status: 'Active', description: '', stock_quantity: 10, image_url: '' },
  { name: 'Boiled Artichoke with Mustard Sauce', category: 'Main Course', price: 55000, status: 'Active', description: '', stock_quantity: 20, image_url: '' },
  { name: 'Gourd Soup with Mushroom & Beetroot', category: 'Special', price: 85000, status: 'Inactive', description: '', stock_quantity: 15, image_url: '' },
  { name: 'Vegan Condensed Milk', category: 'Dessert', price: 45000, status: 'Active', description: '', stock_quantity: 25, image_url: '' },
];

const ManagerFoodList = () => {
  const [foodList, setFoodList] = useState(initialFoodList);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newFood, setNewFood] = useState({
    name: '', category: '', price: '', description: '', stock_quantity: '', image_url: '', status: 'Active'
  });
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showAddPopup, setShowAddPopup] = useState(false);

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setNewFood({ ...foodList[index] });
    setShowEditPopup(true);
  };

  const handleSaveEdit = () => {
    const updated = [...foodList];
    updated[editingIndex] = newFood;
    setFoodList(updated);
    setShowEditPopup(false);
  };

  const handleAddClick = () => {
    setNewFood({ name: '', category: '', price: '', description: '', stock_quantity: '', image_url: '', status: 'Active' });
    setShowAddPopup(true);
  };

  const handleAddSave = () => {
    setFoodList([...foodList, newFood]);
    setShowAddPopup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFood({ ...newFood, [name]: value });
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <h3>Food Management</h3>
        <p>Manage and monitor restaurant dishes</p>

        <div className="food-header">
          <input type="text" placeholder="Search food..." className="search-input" />
          <button className="add-food-btn" onClick={handleAddClick}>+ Add Food</button>
        </div>

        <table className="food-table">
          <thead>
            <tr>
              <th>Food</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foodList.map((food, index) => (
              <tr key={index}>
                <td>{food.name}</td>
                <td>{food.category}</td>
                <td>{food.price.toLocaleString()}đ</td>
                <td>
                  <span className={`badge ${food.status === 'Active' ? 'active' : 'inactive'}`}>
                    {food.status}
                  </span>
                </td>
                <td>
                  <button className="edit-btn" onClick={() => handleEditClick(index)}>Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {(showEditPopup || showAddPopup) && (
          <div className="popup-overlay">
            <div className="popup-form">
              <h4>{showEditPopup ? 'Edit Food' : 'Add New Food'}</h4>
              <input name="name" value={newFood.name} onChange={handleChange} placeholder="Name" />
              <input name="description" value={newFood.description} onChange={handleChange} placeholder="Description" />
              <input name="price" value={newFood.price} onChange={handleChange} placeholder="Price" type="number" />
              <input name="stock_quantity" value={newFood.stock_quantity} onChange={handleChange} placeholder="Stock Quantity" type="number" />
              <input name="image_url" value={newFood.image_url} onChange={handleChange} placeholder="Image URL" />
              <input name="category" value={newFood.category} onChange={handleChange} placeholder="Category" />
              <select name="status" value={newFood.status} onChange={handleChange}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              <div className="popup-actions">
                <button onClick={showEditPopup ? handleSaveEdit : handleAddSave}>Save</button>
                <button onClick={() => { setShowEditPopup(false); setShowAddPopup(false); }}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ManagerFoodList;
