import React, { Component } from 'react';
import classes from './Donate.module.css';
// import commonClasses from '../../../helpers/commonClasses.module.css';
// import ButtonCmp from '../../../helpers/ButtonCmp';
import axios from 'axios';

class Donate extends Component {
    state = {
        fullName: {
            value: "",
            errorMsg: ""
        },
        emailAddress: {
            value: "",
            errorMsg: ""
        },
        donationAmount: {
            value: "",
            errorMsg: ""
        },
        memo: {
            value: "",
            errorMsg: ""
        }
    };

    changeFullName = (event) => {
        const val = event.target.value.trim();
        
        this.setState({fullName: {
            value: val,
            errorMsg: ""
        }});   
    };

    changeEmailAddress = (event) => {
            this.setState({emailAddress: {
                value: event.target.value,
                errorMsg: ""
            }});
    };

    blurEmailAddress = (event) => {
        const val = event.target.value;
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        this.setState({emailAddress: {
            value: val,
            errorMsg: ""
        }}); 
        
        if (!pattern.test(val)) {
            this.setState({
                emailAddress: {
                errorMsg: <p className={[classes.Required, classes.ErrorMsg].join(' ')}>Please enter a proper email address!</p>
              }
            });
         }
    };

    changeAmount = (event) => {
        const val = event.target.value;
        const pattern = /^\s*-?\d+(\.\d{1,2})?\s*$/;
    
        if (pattern.test(val) || (val==='')) {
            this.setState({donationAmount: {
                value: val,
                errorMsg: ""
            }});          
         }

        if (val > 10000 || val < 10) {
            this.setState({
                donationAmount: {
                    errorMsg: <p className={[classes.Required, classes.ErrorMsg].join(' ')}>Please enter an amount from 10 INR to 10,000 INR!</p>
                }
            });
        }
    };

    changeMemo = (event) => {
        const val = event.target.value;

        this.setState({memo: {
            value: val,
            errorMsg: ""
        }});  
    };

    limitDigits = (event, maxLength) => {
        let val = event.target.value;

        if (val.length > maxLength) {
            event.target.value = val.slice(0, maxLength);
        }
    };

    clearForm = () => {
        this.setState({
            fullName: {
                value: "",
                errorMsg: ""
            },
            emailAddress: {
                value: "",
                errorMsg: ""
            },
            donationAmount: {
                value: "",
                errorMsg: ""
            },
            memo: {
                value: "",
                errorMsg: ""
            } 
        });
    };

    donateWithRazorpay = async (event) => {
        event.preventDefault();

        // Call to server to get order ID
        // If successful, show Razorpay's checkout page
        // If payment ID is obtained, send it to server for activation
        // If successful there too, show <DonationSuccessful />
        // Else ???
        // If payment ID isn't obtained, show <DonationFailure />

            const API_URL = 'http://localhost:3001/';
            const orderUrl = `${API_URL}api/v1/razorpay/getOrderId/${this.state.donationAmount.value}`;
            const response = await axios.get(orderUrl);
            const { data } = response;
            const options = {
              key: 'rzp_test_jQcrgh26VUXP6E',
              name: "Sree Agastya Peetam",
              description: "A Religious NGO",
              image: "/images/logo-circle.png",
              order_id: data.id,
              prefill: {
                  name: this.state.fullName.value,
                  email: this.state.emailAddress.value
              },
              handler: async (response) => {
                try {
                 const url = `${API_URL}api/v1/razorpay/capturePayment/`;
                 const captureResponse = await axios.post(url, {
                    paymentId: response.razorpay_payment_id,
                    amount: this.state.donationAmount.value
                 });
                 console.log(captureResponse.data);
                } catch (err) {
                  console.log(err);
                }
              },
              theme: {
                color: "#800000",
              },
            };
      
            const rzpPaymentModal = new window.Razorpay(options);
            rzpPaymentModal.open();
    };

    render() {
        return (
           <div className={classes.DonateContainer}>
            {/* <h4>Donate to Us for a Noble Cause!</h4>
            <q className={classes.Quotation}>You have two hands. One to help yourself, the second to help others.</q>
            <br /> */}
            {/* <p>- http://rishikajain.com/2012/05/08/helping-quote/</p> */}

           {/* <div className={classes.Donation}>
                <div className={classes.DonationInfo}>
                    <p className={commonClasses.Headings}>Why should you donate?</p>
                    <p className={classes.Paragraphs}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris. Facilisi etiam dignissim diam quis enim lobortis. Pellentesque sit amet porttitor eget dolor. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Vitae tortor condimentum lacinia quis. Eget dolor morbi non arcu risus. In hac habitasse platea dictumst vestibulum rhoncus est. Aliquam ut porttitor leo a diam sollicitudin tempor id. In pellentesque massa placerat duis ultricies lacus.
                    </p>

                    <p className={commonClasses.Headings}>What do we do with your information?</p>
                    <p className={classes.Paragraphs}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris. Facilisi etiam dignissim diam quis enim lobortis. Pellentesque sit amet porttitor eget dolor. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Vitae tortor condimentum lacinia quis. Eget dolor morbi non arcu risus. In hac habitasse platea dictumst vestibulum rhoncus est. Aliquam ut porttitor leo a diam sollicitudin tempor id. In pellentesque massa placerat duis ultricies lacus.
                    </p>
                </div>

                <form className={["form-group", classes.PaymentSection].join(' ')} onSubmit={(e) => this.donateWithRazorpay(e)}>
                   <div>
                        <div className={classes.Field}>
                            <label>Full Name <label className={classes.Required}>*</label></label>
                            <input 
                            type="text" 
                            name="fullName"
                            value={this.state.fullName.value} 
                            onInput={(e) => this.limitDigits(e, 256)} 
                            onChange={this.changeFullName}
                            required />
                        </div>

                        <div className={classes.Field}>
                            <label>Email Address <label className={classes.Required}>*</label></label>
                            <input 
                            type="email" 
                            name="emailAddress"
                            value={this.state.emailAddress.value}
                            onChange={this.changeEmailAddress}
                            onInput={(e) => this.limitDigits(e, 255)} 
                            onBlur={this.blurEmailAddress}
                            required />
                            {this.state.emailAddress.errorMsg}
                        </div>
                        
                        <div className={classes.Field}>
                            <label>Amount (INR only accepted) <label className={classes.Required}>*</label></label>
                            <input 
                            type="number"
                            name="amount" 
                            value={this.state.donationAmount.value} 
                            min={10} 
                            max={10000}
                            onChange={this.changeAmount}
                            onInput={(e) => this.limitDigits(e, 5)}
                            required />
                            {this.state.donationAmount.errorMsg}
                        </div>
                      
                        <div className={classes.Field}>
                            <label>Memo</label>
                            <textarea 
                            rows={6} 
                            value={this.state.memo.value}
                            onInput={(e) => this.limitDigits(e, 300)} 
                            onChange={this.changeMemo} 
                            placeholder="Please enter occasion (e.g.: birthday, anniversary, etc), date of occasion, person(s) to be honored!" />
                        </div>

                        <ButtonCmp type="submit" className={classes.DonateFormButton}>Donate</ButtonCmp>
                        <ButtonCmp type="button" className={classes.ClearFormButton} onClick={this.clearForm}>Clear Form</ButtonCmp>
                    </div>

                    <p className={classes.ThankYouMessage}>Thank you for donating! Every rupee counts! Loka Samasta Sukhinobhavantu!</p>           
              </form>
          </div> */}

          {/* <p>Coming soon! Page under construction!</p> */}

          <div className={classes.FrameWrapper}>
            <iframe src="https://rzp.io/l/xaBAlgi/" title="Donation" className={classes.DonateRazorpay}></iframe>
          </div>
          </div>
       );
    }
}

export default Donate;