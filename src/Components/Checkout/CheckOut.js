import React from 'react';
import { useState } from 'react';
import "./Checkout.css";

const CheckOut = () => {
    const [booking,setBooking] =useState("");
    const handleBooking = (event) => {
        event.preventDefault();
        setBooking("Thank you for the booking")
    }
    return (
        <div>
            <div className='project-highlight'>
                <h2>Latest works</h2>
                <hr />
                <div>
                    <h4>THE BRAZILIN AMAZON</h4>
                    <img src=" https://i.ibb.co/DpXwbPx/images-1.jpg" alt="" />
                    <img src="https://i.ibb.co/rMtyDVB/images.jpg" alt="" />
                    <img src="https://i.ibb.co/2n01LTM/img1.jpg" alt="" />
                    <hr />
                </div>
                <div>
                    <h4>NATURE, BRAZIL</h4>
                    <img src="https://i.ibb.co/S0YRtSV/images-1.jpg" alt="" />
                    <img src="https://i.ibb.co/9TkrVSW/images-3.jpg" alt="" />
                    <img src="https://i.ibb.co/dMQk0QJ/images.jpg" alt="" />
                    <hr />
                </div>
                <div>
                    <h4>SINHARAJA FOREST RESERVE - SRI LANKA</h4>
                    <img src=" https://i.ibb.co/88fktQ9/download-1.jpg" alt="" />
                    <img src="https://i.ibb.co/K6wVB5j/download.jpg" alt="" />
                    <img src="https://i.ibb.co/kqs1Brw/images.jpg" alt="" />
                    <hr />
                </div>

            </div>
            <h5>CONTACT US</h5>
            <h2>Let's booking</h2>
            <div className='checkout-container'>
                <div>
                    <img style={{ width: "100%" }} src="https://i.ibb.co/CwmZ8k9/cover-2048.jpg" alt="" />
                </div>
                <div>
                    <form>
                        <input type="text" placeholder='User Name' required />
                        <hr />
                        <input type="email" name="email address" placeholder='Enter email' id="" required />
                        <hr />
                        <input type="text" name="number" placeholder='Phone Number' id="" required />
                        <hr />
                        <input type="text" placeholder='Address' required />
                        <hr />
                        <button onClick={handleBooking}>Booking</button>
                        <p style={{color:"mediumseagreen"}}>{booking}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;