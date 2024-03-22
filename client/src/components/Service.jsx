import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image1 from '../assets/images/images2.jpg';
import Image2 from '../assets/images/farm.jpg';
import Image3 from '../assets/images/farms.jpg';

import './Service.css';



const Service = () => {
    return (
        <>
            <div className="service-container">
                <h1 className="serivce">
                    Services
                    <hr />
                </h1>
                <div className="container">
                    <div className="descriptions">
                    <span>
                    We provide
                    </span>
                        <p>
                            Best Agriculture
                             Servivce In The 
                             WorldHere                        
                        </p>
                    </div>
                    
                    <div className="sub-container">
                        <Card variant="shadow" className="card" style={{ width: '18rem' }}>
                            <div className="overflow">
                                <Card.Img className="card-img" variant="top" src={Image1} alt='new' />
                            </div>
                            <Card.Body>
                                <Card.Title>Research</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="success">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card className="card" style={{ width: '18rem' }}>
                            <div className="overflow">
                                <Card.Img className="card-img" variant="top" src={Image2} alt='new' />
                            </div>
                            <Card.Body>
                                <Card.Title>Training</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="success">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card className="card" style={{ width: '18rem' }}>
                            <div className="overflow">
                                <Card.Img className="card-img" variant="top" src={Image3} alt='new' />
                            </div>
                            <Card.Body>
                                <Card.Title>Rental Services</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="success">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;