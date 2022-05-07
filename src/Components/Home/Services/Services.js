import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import "./Services.css"

const Services = ({ Services }) => {
    const { img, name,price,description} = Services;
 
    return (
       <div className="cart-container">
            <CardGroup>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <b>Photoshoot area:</b> {name}</Card.Title>
                    <Card.Text style={{padding:"15px"}}>
                        {description}
                    </Card.Text>
                    <h3>Price:{price}</h3>
                    <a href="/checkout"><button>CheckOut</button></a>
                </Card.Body>
            </Card>
        </CardGroup>
       </div>
    );
};

export default Services;    