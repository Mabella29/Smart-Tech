import React from "react";
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
        <div className="main-container">
            
            <div className="cont1">
                <div className="popup">
                    <div className="welcome">
                        <h1>Welcome to Smart-Tech</h1>
                        <small>Empowering Modern Agriculture</small>
                    </div>
                    <div className="description">
                        <h3>
                            Smart-Tech offers cutting-edge cloud-based farm management software designed
                            to revolutionize agriculture. From data management to resource optimization and
                             business intelligence, <br /> our platform is tailored to meet 
                              <br />the evolving 
                             needs of farmers worldwide.
                        </h3>
                        <div className="btns">
                            <Link 
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                            >Try Our Free Demo</Link>
                        
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="cont2">
                
            </div>
        </div>

         </>
      )
    
}

export default Hero;