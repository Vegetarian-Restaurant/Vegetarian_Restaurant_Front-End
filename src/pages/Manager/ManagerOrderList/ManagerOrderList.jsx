import React, { useState } from 'react';
import Sidebar from '../ManagerSidebar/Sidebar.jsx';
import './ManagerOrderList.css';

const sampleOrders = [
  {
    order_id: 'DH001',
    name: 'Võ Chiêu Quân',
    food: 'Bún chay, Gỏi cuốn chay',
    total_amount: 90000,
    status: 'preparing',
    time: '10:30',
    phone_number: '0912345678',
    address: 'Hà Nội',
    method: 'Cash',
    order_date: '2025-06-10 09:00:00',
    payment_method: 'Cash',
    payment_id: 123456,
    customer_id: 1,
    created_at: '2025-06-10 08:55:00',
    discount_id: 2
  },
  {
    order_id: 'DH002',
    name: 'Võ Chiêu Quân',
    food: 'Cơm tấm chay, Canh rong biển',
    total_amount: 110000,
    status: 'delivered',
    time: '11:00',
    phone_number: '0933222111',
    address: 'Hồ Chí Minh',
    method: 'VNPAY',
    order_date: '2025-06-10 08:30:00',
    payment_method: 'VNPAY',
    payment_id: 654321,
    customer_id: 2,
    created_at: '2025-06-10 08:25:00',
    discount_id: null
  },
];

const statusLabels = {
  pending: 'Pending',
  preparing: 'Preparing',
  shipped: 'Shipped',
  delivered: 'Delivered',
  cancelled: 'Cancelled',
};

const ManagerOrderList = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderToUpdate, setOrderToUpdate] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredOrders =
    activeFilter === 'all'
      ? sampleOrders
      : sampleOrders.filter((order) => order.status === activeFilter);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <h3>Order Management</h3>
        <p>Manage and monitor restaurant orders</p>

        <div className="order-filters">
          {['all', 'pending', 'preparing', 'shipped', 'delivered', 'cancelled'].map((status) => (
            <button
              key={status}
              className={`filter-btn ${activeFilter === status ? 'active' : ''}`}
              onClick={() => setActiveFilter(status)}
            >
              {status === 'all' ? 'All' : statusLabels[status]}
            </button>
          ))}
        </div>

        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Food</th>
              <th>Total</th>
              <th>Status</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <tr key={index}>
                <td>#{order.order_id}</td>
                <td>{order.name}</td>
                <td>{order.food}</td>
                <td>{order.total_amount.toLocaleString()}đ</td>
                <td>
                  <span className={`badge status-${order.status}`}>
                    {statusLabels[order.status] || order.status}
                  </span>
                </td>
                <td>{order.time}</td>
                <td>
                  <button onClick={() => setSelectedOrder(order)}>Details</button>
                  <button onClick={() => setOrderToUpdate(order)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedOrder && (
          <div className="modal-overlay">
            <div className="modal">
              <h4>Order Details</h4>
              <p><strong>Order ID:</strong> {selectedOrder.order_id}</p>
              <p><strong>Customer ID:</strong> {selectedOrder.customer_id}</p>
              <p><strong>Name:</strong> {selectedOrder.name}</p>
              <p><strong>Phone:</strong> {selectedOrder.phone_number}</p>
              <p><strong>Address:</strong> {selectedOrder.address}</p>
              <p><strong>Order Date:</strong> {selectedOrder.order_date}</p>
              <p><strong>Created At:</strong> {selectedOrder.created_at}</p>
              <p><strong>Food:</strong> {selectedOrder.food}</p>
              <p><strong>Total:</strong> {selectedOrder.total_amount.toLocaleString()}đ</p>
              <p><strong>Status:</strong> {statusLabels[selectedOrder.status]}</p>
              <p><strong>Payment Method:</strong> {selectedOrder.payment_method}</p>
              <p><strong>Payment ID:</strong> {selectedOrder.payment_id}</p>
              <p><strong>Discount ID:</strong> {selectedOrder.discount_id || 'None'}</p>
              <p><strong>Method:</strong> {selectedOrder.method}</p>
              <button className="close-btn" onClick={() => setSelectedOrder(null)}>Close</button>
            </div>
          </div>
        )}

        {orderToUpdate && (
          <div className="modal-overlay">
            <div className="modal">
              <h4>Update Order</h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Order updated!");
                  setOrderToUpdate(null);
                }}
              >
                <label>
                  Name:
                  <input
                    type="text"
                    defaultValue={orderToUpdate.name}
                    required
                  />
                </label>
                <label>
                  Phone:
                  <input
                    type="text"
                    defaultValue={orderToUpdate.phone_number}
                    required
                  />
                </label>
                <label>
                  Address:
                  <input
                    type="text"
                    defaultValue={orderToUpdate.address}
                    required
                  />
                </label>
                <label>
                  Status:
                  <select defaultValue={orderToUpdate.status}>
                    <option value="pending">Pending</option>
                    <option value="preparing">Preparing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </label>
                <label>
                  Payment Method:
                  <select defaultValue={orderToUpdate.payment_method}>
                    <option value="Cash">Cash</option>
                    <option value="VNPAY">VNPAY</option>
                  </select>
                </label>
                <label>
                  Discount ID:
                  <input
                    type="number"
                    defaultValue={orderToUpdate.discount_id || ''}
                  />
                </label>
                <div style={{ marginTop: '10px' }}>
                  <button type="submit" className="update-btn">Save</button>
                  <button
                    type="button"
                    className="close-btn"
                    onClick={() => setOrderToUpdate(null)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ManagerOrderList;
