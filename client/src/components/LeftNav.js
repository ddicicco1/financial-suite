import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
  return (
    <nav className="left-nav">
      <ul>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
            🏠 Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/invoices" className={({ isActive }) => isActive ? 'active' : ''}>
            📄 Invoices
          </NavLink>
        </li>
        <li>
          <NavLink to="/bill-pay" className={({ isActive }) => isActive ? 'active' : ''}>
            💵 Bill Pay
          </NavLink>
        </li>
        <li>
          <NavLink to="/vendors" className={({ isActive }) => isActive ? 'active' : ''}>
            🗂 Vendors
          </NavLink>
        </li>
        <li>
          <NavLink to="/insights" className={({ isActive }) => isActive ? 'active' : ''}>
            📊 Insights
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => isActive ? 'active' : ''}>
            ⚙️ Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default LeftNav;