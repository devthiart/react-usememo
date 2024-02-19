import { useState } from 'react';
import './App.css';

function calculateTaxValue(value) {
  console.log("Calculating tax...");
  
  if(!value) {
    return 0;
  }

  return parseFloat(value) * 0.75;
}

function App() {
  const [taxName, setTaxName] = useState('');
  const [grossValue, setGrossValue] = useState('');

  const taxValue = calculateTaxValue(grossValue);

  return (
    <div className="App">
      <input
        placeholder='Tax Name'
        value={taxName}
        onChange={event => setTaxName(event.target.value)}
      />
      <input
        placeholder='Gross Value'
        value={grossValue}
        onChange={event => setGrossValue(event.target.value)}
      />

      <ul>
        <li>Tax Name: <strong>{taxName}</strong></li>
        <li>Tax Amount: $ <strong>{taxValue}</strong></li>
      </ul>

    </div>
  );
}

export default App;
