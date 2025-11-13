

import React, { useState } from 'react';
import './App.css';
import HomePage from './HomePage';
import ToolPage from './ToolPage';

function App() {
  const [page, setPage] = useState('home'); 

  return (
    <div className="App">
  
      <header className="main-header">
        <div className="logo" onClick={() => setPage('home')}>
          LegendIA 
        </div>
        <nav>
          {page === 'home' ? (
            <button className="nav-button" onClick={() => setPage('tool')}>
              Ir para a IA
            </button>
          ) : (
            <button className="nav-button" onClick={() => setPage('home')}>
              Voltar
            </button>
          )}
        </nav>
      </header>

      
      <main>
        {page === 'home' ? <HomePage /> : <ToolPage />}
      </main>
    </div>
  );
}

export default App;