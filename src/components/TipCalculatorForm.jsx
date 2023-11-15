
import React, { useState } from 'react';
import NumberInput from './NumberInput';
import '../App.css'
import '../index.css';



function TipCalculatorForm() {


    const [totalBill, setTotalBill] = useState(0);
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [tipPercentage, setTipPercentage] = useState(15);
    const [serviceQuality, setServiceQuality] = useState('Good');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // calculation done here...
        console.log('Calculating tip...');
    };

    // Function to handle form reset
    const handleReset = () => {
        setTotalBill(0);
        setNumberOfGuests(1);
        setTipPercentage(15);
        setServiceQuality('Good');
    };

    return (
        
        <form onSubmit={handleSubmit}>
            <NumberInput label="Total Bill" value={totalBill} onChange={setTotalBill} />
            <NumberInput label="Number of Guests" value={numberOfGuests} onChange={setNumberOfGuests} min={1} />
            <NumberInput label="Tip Percentage" value={tipPercentage} onChange={setTipPercentage} min={0} max={100} />
            <ServiceQualityRating value={serviceQuality} onChange={setServiceQuality} />

            <div className="container">
                <div className="row text-center">
                <h1>Tip Calculator</h1> 
                </div>
                <div>
                    <h2>Rate the service quality:</h2>
                    <StarRating />
                </div>

                <button type="submit">Submit</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </div>
        </form>
    );
}

export default TipCalculatorForm;
