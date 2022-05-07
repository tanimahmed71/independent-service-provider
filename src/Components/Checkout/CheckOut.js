import React from 'react';
import "./Checkout.css";

const CheckOut = () => {
    const handleBooking =(event)=>{
        event.preventDefault();
        console.log('lkfjkdfjkdj');
    }
    return (
        <div>
                    <h5>CONTACT US</h5>
                    <h2>Let's booking</h2>
            <div className='checkout-container'>
            <div>
                <img style={{width:"100%"}} src="https://i.ibb.co/CwmZ8k9/cover-2048.jpg" alt="" />
            </div>
            <div>
                <form>
                    <input type="text" placeholder='User Name' required />
                    <hr />
                    <input type="email" name="email address" placeholder='Enter email' id="" required />
                    <hr />
                    <input type="text" name="number" placeholder='Phone Number' id="" required/>
                    <hr />
                    <input type="text"placeholder='Address'required  />
                    <hr />
                    <button onClick={handleBooking}>Booking</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default CheckOut;