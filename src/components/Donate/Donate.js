import React, { Component } from 'react';
import classes from './Donate.module.css';

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
                <div className="alert alert-danger">
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
            
                <form className="form-group">
                    {error}
                    <div className={classes.Donation}>
                        <div>
                        <div className={classes.Field}>
                            <label>Full Name <label className={classes.Required}>*</label>: </label>
                            <input type="text" required />
                        </div>

                        <div className={classes.Field}>
                            <label>Email Address <label className={classes.Required}>*</label>: </label>
                            <input type="email" required />
                        </div>
                        
                        <div className={classes.Field}>
                            <label>Amount (INR only accepted) <label className={classes.Required}>*</label>: </label>
                            <input 
                            type="number"
                            name="amount" 
                            value={this.state.donationAmount} 
                            min="1.00" 
                            max="300.00" 
                            onChange={this.changeAmount}
                            required />
                        </div>
                        <button type="submit" className={["btn btn-primary", classes.BootstrapFont].join(' ')}>Donate with Razorpay</button>
                        </div>

                        <div>
                            Address Fields
                        </div>
                    </div>
                </form>
       );
    }
}

export default Donate;