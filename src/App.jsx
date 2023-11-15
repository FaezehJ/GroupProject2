import React, { useState, useEffect } from 'react';
import TipCalculatorForm from './components/TipCalculatorForm';
import './App.css';
import './index.css';



function App() {
    // State for storing bill total     
    const [bill, setBill] = useState("");

    // State for storing tip percentage as a number
    const [tip, setTip] = useState(15);

    // State for storing number of splits 
    const [split, setSplit] = useState(1);

    // State for storing split total 
    const [splitTotal, setSplitTotal] = useState(0);

    // Tip percentage options
    const tipOptions = [5, 10, 15, 20, 25];

    // Function to handle changes in the bill total input 
    function handleBillChange(e) {
        setBill(e.target.value);
    }

    // Function to handle changes in the tip percentage dropdown
    function handleTipChange(e) {
        setTip(Number(e.target.value));
    }

    // Function to decrease number of splits
    function splitMinus() {
        setSplit((oldValue) => Math.max(oldValue - 1, 1));
    }

    // Function to increase number of splits
    function splitPlus() {
        setSplit((oldValue) => oldValue + 1);
    }

    // Function to calculate the split total based on bill, tip, and number of splits 
    function calculate() {
        const percentage = 1 + tip / 100;
        const result = ((bill * percentage) / split).toFixed(2);
        setSplitTotal(result);
    }

    // useEffect hook to calculate the split total whenever bill, tip, or split changes 
    useEffect(() => {
        calculate();
    }, [bill, tip, split]);

    return (
        <main className='calculator-container'>
            <h1>Tip Calculator</h1>

            <label htmlFor="bill-total">Bill Total</label>
            <input
                id="bill-total"
                type="text"
                placeholder="0.00"
                value={bill}
                onChange={handleBillChange}
            />

            <label htmlFor="tip">Tip</label>
            <select
                id="tip"
                value={tip}
                onChange={handleTipChange}
            >
                {tipOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}%
                    </option>
                ))}
            </select>

            <div className="split">
                <label htmlFor="split">Number of Guests</label>
                <div className="split-control">
                    <button onClick={splitMinus}>-</button>
                    <input
                        type="text"
                        value={split}
                        readOnly
                        className="split-input"
                    />
                    <button onClick={splitPlus}>+</button>
                </div>
            </div>

            <div className="result">
                <label htmlFor="split-total"><strong>Split total: </strong></label>
                <input
                    id="split-total"
                    type="text"
                    value={`$${splitTotal}`}
                    readOnly
                    className="split-total-input"
                />
            </div>
        </main>
    );
}

export default App;
