import React from 'react';
import LeftNav from './LeftNav';
import TopInfo from './TopInfo';
import Dashboard from './Dashboard';

const Layout = () => {
  return (
    <div className="app-container">
      <LeftNav />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <TopInfo />
        <main className="main-content">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Layout;