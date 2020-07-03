import React, { Component } from 'react';
import './Donate.css';

// let error = null;

class Donate extends Component {
    // state = {
    //     donationAmount: "1.00"
    // };

    // changeAmount = (event) => {
    //     const amVal = event.target.value;
    //     const { donationAmount } = this.state;
    //     const pattern = /^\s*-?\d+(\.\d{1,2})?\s*$/;

    //     if (donationAmount > 10000 || donationAmount < 1) {
    //         error = (
    //             <div className="alert alert-danger">
    //                 <p>Please enter an amount from 1 INR to 10,000 INR!</p>
    //             </div>
    //         );
    //     } 
        
    //      if (pattern.test(amVal)) {
    //         this.setState({donationAmount: amVal});          
    //      }
    // };

    render() {
        return (
            <div>
            <div className="Filler">
                <p>Coming soon! Page under construction!</p>
            </div>
        
                
                
                
                
                
                {/* <form className="form-group">
                {error}
                <label>Your Name <label className="Required">*</label>: </label>
                <input type="text" required />

                <br />
                <br />

                <label>Your Email Address <label className="Required">*</label>: </label>
                <input type="email" required />
               
                <br />
                <br />

                <label>Amount (INR only accepted) <label className="Required">*</label>: </label>
                <input 
                type="number"
                name="amount" 
                value={this.state.donationAmount} 
                min="1.00" 
                max="300.00" 
                onChange={this.changeAmount}
                required />

                <br />
                <br />

                <label className="alert alert-info">We have integrated with Razorpay to make donation much easier!</label>
                
                <br />
                
                <button type="submit" className="btn btn-primary">Donate with Razorpay</button>
                </form> */}
            </div>
        );
    }
}

export default Donate;