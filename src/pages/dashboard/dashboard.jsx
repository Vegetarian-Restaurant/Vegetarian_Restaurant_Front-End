import "./dashboard.css"

// SVG icons as components
const IconChart = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="9" y1="8" x2="9" y2="21" />
    <line x1="15" y1="8" x2="15" y2="21" />
    <line x1="3" y1="14" x2="21" y2="14" />
  </svg>
)

const IconDollar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)

const IconPercent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
)

const IconTrendingUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
)

const IconTrendingDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
  </svg>
)

const IconUsers = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const IconShoppingCart = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)

const Dashboard = () => {
  // Sample data for metrics
  const metrics = [
    {
      title: "Net Profit Margin",
      value: "$24.5K",
      change: "+1.2%",
      trend: "up",
      icon: <IconDollar />,
      color: "green",
    },
    {
      title: "Avg Profit Margin",
      value: "9.5%",
      change: "+0.8%",
      trend: "up",
      icon: <IconPercent />,
      color: "blue",
    },
    {
      title: "Return On Investment",
      value: "19.1%",
      change: "+2.4%",
      trend: "up",
      icon: <IconTrendingUp />,
      color: "purple",
    },
    {
      title: "Monthly Revenue",
      value: "$2,176",
      change: "-0.3%",
      trend: "down",
      icon: <IconChart />,
      color: "orange",
    },
  ]

  return (
    <div className="dashboard-container">
      {/* Page header */}
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <div className="welcome-message">Welcome back, Admin</div>
      </div>

      {/* Metrics grid */}
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className={`metric-card ${metric.color}`}>
            <div className="metric-icon-container">
              <div className={`metric-icon ${metric.color}`}>{metric.icon}</div>
            </div>
            <div className="metric-details">
              <div className="metric-title">{metric.title}</div>
              <div className="metric-value">{metric.value}</div>
              <div className="metric-change">
                <span className={`trend-indicator ${metric.trend}`}>
                  {metric.trend === "up" ? <IconTrendingUp /> : <IconTrendingDown />}
                  {metric.change}
                </span>
                <span className="vs-text">vs last month</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart section */}
      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">Revenue Overview</h2>
          <p className="chart-subtitle">Monthly performance tracking</p>
        </div>
        <div className="chart-container">
          {/* Chart placeholder */}
          <div className="chart-placeholder">
            <IconChart className="placeholder-icon" />
            <p className="placeholder-text">Revenue data visualization</p>
          </div>
        </div>
      </div>

      {/* Additional sections */}
      <div className="additional-sections">
        <div className="section-card">
          <div className="section-header">
            <h3 className="section-title">Quick Actions</h3>
          </div>
          <div className="section-content">
            <button className="action-button primary">
              <IconShoppingCart />
              <span>View Recent Orders</span>
            </button>
            <button className="action-button secondary">
              <IconUsers />
              <span>Manage Staff Schedule</span>
            </button>
            <button className="action-button secondary">
              <IconChart />
              <span>Generate Reports</span>
            </button>
          </div>
        </div>

        <div className="section-card">
          <div className="section-header">
            <h3 className="section-title">System Status</h3>
          </div>
          <div className="section-content">
            <div className="status-item">
              <span className="status-label">Orders Processing</span>
              <span className="status-badge success">Active</span>
            </div>
            <div className="status-item">
              <span className="status-label">Staff Online</span>
              <span className="status-badge info">12 Members</span>
            </div>
            <div className="status-item">
              <span className="status-label">System Health</span>
              <span className="status-badge success">Excellent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
