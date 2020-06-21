import React, { Component } from 'react';
import classes from './Donate.module.css';
// import CurrencyInput from 'react-currency-input';

let error = null;

class Donate extends Component {
    state = {
        donationAmount: "1.00"
    };

    changeAmount = (event) => {
        const amVal = event.target.value;
        const { donationAmount } = this.state;
        const pattern = /^\s*-?\d+(\.\d{1,2})?\s*$/;

        if (donationAmount > 10000 || donationAmount < 1) {
            error = (
                <div className={classes.Error}>
                    <p>Please enter an amount from 1 INR to 10,000 INR!</p>
                </div>
            );
        } 
        
         if (pattern.test(amVal)) {
            this.setState({donationAmount: amVal});          
         }
    };

    render() {
        return (
            <div>
                <h3>Donate to Agastya Peetam!</h3>
                <p>If you feel like what Swamiji is doing is noble, then please enter the details below.</p>
                   <form className={classes.DonationForm}>
                   {error} 
                   <label>Amount: </label>
                   <input 
                   type="number" 
                   value={this.state.donationAmount} 
                   min="1.00" 
                   max="300.00" 
                   onChange={this.changeAmount} />
                   <label> Indian Rupees (INR)</label>
                   
                   <br />
                   <br />
                   <button type="submit" className={classes.DonateButton}>Donate</button>
                </form>
            </div>
        );
    }
}

export default Donate;