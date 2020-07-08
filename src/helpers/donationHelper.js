import React from 'react';

let error = null;

const changeAmount = (event, props) => {
    const amVal = event.target.value;
    const pattern = /^\s*-?\d+(\.\d{1,2})?\s*$/;

    if (amVal > 10000 || amVal < 1) {
        error = (
            <div className="alert alert-danger">
                <p>Please enter an amount from 10 INR to 10,000 INR!</p>
            </div>
        );

    } 
    else {
        error = <div style={{display:"none"}}></div>
    }
    
     if (pattern.test(amVal)) {
        props.setState({donationAmount: amVal});          
     }
};

const limitDigits = (event) => {
    let val = event.target.value;

    if (val.length > 5) {
        event.target.value = val.slice(0, 5);
    }
};

const donationValidation = {
    changeAmount,
    limitDigits,
    error
};

export default donationValidation;