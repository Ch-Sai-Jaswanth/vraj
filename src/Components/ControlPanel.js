import React, { useState } from 'react';
import '../styles/ControlPanel.css';

const ControlPanel = ({
  array,
  setArray,
  handleSorting,
  isSorting,
  sortingAlgorithm,
  handleAlgorithmChange,
  sortingSpeed,
  handleSpeedChange,
}) => {
  const [arrayInput, setArrayInput] = useState('');
  const [arraySize, setArraySize] = useState(array.length);

  const handleArrayInput = (input) => {
    setArrayInput(input);
  };

  const handleArraySizeChange = (size) => {
    setArraySize(size);
  };

  const handleSubmit = () => {
    const inputArray = arrayInput.split(',').map(Number);
    setArray(inputArray);
    setArraySize(inputArray.length);
  };

  return (
    <div className="control-panel">
      <div className="input-group">
        <label htmlFor="array-input">Array Elements:</label>
        <input
          type="text"
          id="array-input"
          value={arrayInput}
          onChange={(e) => handleArrayInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="input-group">
        <label htmlFor="array-size">Array Size:</label>
        <input
          type="number"
          id="array-size"
          min="2"
          max="100"
          value={arraySize}
          onChange={(e) => handleArraySizeChange(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="sorting-algorithm">Sorting Algorithm:</label>
        <select
          id="sorting-algorithm"
          value={sortingAlgorithm}
          onChange={(e) => handleAlgorithmChange(e.target.value)}
        >
          <option value="bubbleSort">Bubble Sort</option>
          <option value="quickSort">Quick Sort</option>
          <option value="mergeSort">Merge Sort</option>
          <option value="insertionSort">Insertion Sort</option>
          <option value="selectionSort">Selection Sort</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="sorting-speed">Sorting Speed:</label>
        <input
          type="range"
          id="sorting-speed"
          min="100"
          max="1000"
          step="100"
          value={sortingSpeed}
          onChange={(e) => handleSpeedChange(e.target.value)}
        />
        <span>{sortingSpeed} ms</span>
      </div>
      <button onClick={handleSorting} disabled={isSorting}>
        {isSorting ? 'Sorting...' : 'Start Sorting'}
      </button>
    </div>
  );
};

export default ControlPanel;
