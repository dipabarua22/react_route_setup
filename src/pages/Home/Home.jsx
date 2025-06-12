import React from "react";
import "./Home.css"; // Optional external CSS for better styling

const dashboardData = [
  { title: "Books", count: 3, color: "#00c0ef", icon: "📘" },
  { title: "Members", count: 2, color: "#00a65a", icon: "👥" },
  { title: "NewsPapers", count: 1, color: "#f39c12", icon: "📰" },
  { title: "Magazines", count: 0, color: "#dd4b39", icon: "🗞️" },
];

const stats = [
  { title: "Issued", count: 2, icon: "📤", color: "#00a65a" },
  { title: "Returned", count: 1, icon: "👍", color: "#dd4b39" },
  { title: "Not Returned", count: 1, icon: "👎", color: "#00c0ef" },
];

const Home = () => {
  const today = new Date().toLocaleDateString();

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>SAIDE Library</h2>
        <ul>
          <li>Dashboard</li>
          <li>Members</li>
          <li>Books</li>
          <li>Magazines</li>
          <li>Newspapers</li>
          <li>Issued</li>
          <li>Returned</li>
          <li>Not Returned</li>
        </ul>
      </aside>

      {/* Main Panel */}
      <main className="main-content">
        <header className="topbar">
          <h1>Control Panel</h1>
          <span>Admin | {today}</span>
        </header>

        {/* Summary Cards */}
        <div className="summary-cards">
          {dashboardData.map((item, i) => (
            <div className="card" key={i} style={{ backgroundColor: item.color }}>
              <div className="icon">{item.icon}</div>
              <div className="info">
                <h3>{item.count}</h3>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="stats-cards">
          {stats.map((item, i) => (
            <div className="card" key={i} style={{ backgroundColor: item.color }}>
              <div className="icon">{item.icon}</div>
              <div className="info">
                <h4>{item.title}</h4>
                <p>{item.count}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
