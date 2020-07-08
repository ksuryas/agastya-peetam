import React, { Component } from 'react';
import classes from './Donate.module.css';
// import ButtonCmp from '../../helpers/ButtonCmp';

// let error = null;

class Donate extends Component {
    // state = {
    //     donationAmount: ""
    // };

    // changeAmount = (event) => {
    //     const amVal = event.target.value;
    //     const pattern = /^\s*-?\d+(\.\d{1,2})?\s*$/;

    //     if (amVal > 10000 || amVal < 1) {
    //         error = (
    //             <div className="alert alert-danger">
    //                 <p>Please enter an amount from 10 INR to 10,000 INR!</p>
    //             </div>
    //         );

    //     } 
    //     else {
    //         error = <div style={{display:"none"}}></div>
    //     }
        
    //      if (pattern.test(amVal)) {
    //         this.setState({donationAmount: amVal});          
    //      }
    // };

    // changeFullName = (event) => {
    //     const val = event.target.value;

    //     if (!val.trim()) {
    //         error = (
    //             <div className="alert alert-danger">
    //                 <p>Please enter your name!</p>
    //             </div>
    //         );
    //      } else {
    //         this.setState({fullName: val});                      
    //     } 
    // };

    // limitDigits = (event, maxLength) => {
    //     let val = event.target.value;

    //     if (val.length > maxLength) {
    //         event.target.value = val.slice(0, maxLength);
    //     }
    // };

    render() {
        return (
                <form className={classes.Donation}>
                    {/* {error}
                    <div className={classes.Donation}>
                        <div>
                        <div className={classes.Field}>
                            <label>Full Name <label className={classes.Required}>*</label></label>
                            <input type="text" name="fullName" onInput={(e) => this.limitDigits(e, 256)} required />
                        </div>

                        <div className={classes.Field}>
                            <label>Email Address <label className={classes.Required}>*</label></label>
                            <input type="email" required />
                        </div>
                        
                        <div className={classes.Field}>
                            <label>Amount (INR only accepted) <label className={classes.Required}>*</label></label>
                            <input 
                            type="number"
                            name="amount" 
                            value={this.state.donationAmount} 
                            min={1} 
                            max={10000}
                            onChange={this.changeAmount}
                            onInput={(e) => this.limitDigits(e, 5)}
                            required />
                        </div>
                      
                        <ButtonCmp type="submit" className={classes.BootstrapFont}>Donate with Razorpay</ButtonCmp>
                        <ButtonCmp type="button" className={classes.ClearButton}>Clear Form</ButtonCmp>

                        </div>

                        <div>
                            Address Fields?
                        </div>
                    </div> */}

                    <p>Coming soon! Page under construction!</p>
              </form>
       );
    }
}

export default Donate;