import React from 'react';
import SortingVisualizer from '../src/Components/SortingVisualizer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SORTIFY - Interactive Sorting Visualizer</h1>
      </header>
      <SortingVisualizer />
    </div>
  );
}

export default App;
