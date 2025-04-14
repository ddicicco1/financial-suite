import React from 'react';
import Dashboard from './components/Dashboard';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Financial Suite MVP Dashboard</h1>
      </header>
      <main className="App-main">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;