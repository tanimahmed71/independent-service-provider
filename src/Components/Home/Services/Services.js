import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import "./Services.css"

const Services = ({ Services }) => {
    const { img, name,price} = Services;
    const handleCheckOutBtn = ()=>{

    }
    return (
       <div className="cart-container">
            <CardGroup>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Photoshoot area:{name}</Card.Title>
                    <Card.Text style={{padding:"15px"}}>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. 
                    </Card.Text>
                    <h3>Price:{price}</h3>
                    <button onClick={handleCheckOutBtn}>CheckOut</button>
                </Card.Body>
            </Card>
        </CardGroup>
       </div>
    );
};

export default Services;    