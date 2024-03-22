import React from "react";
import {Link} from 'react-router-dom';
import './About.css';
import Img from '../assets/images/download.jpg';
import Img1 from '../assets/images/images1.jpg';


const About = () => {
    return (
        <div className="about-container">
            <div className="sub-about">
                <div className="about">
                    <div className="design">
                        <div className="client">
                            <span>20+</span>
                            <h6>Client</h6>
                        </div>
                        <img className="about-img" src={Img1} alt="" />
                    </div>
                    <div className="descript">
                        <span>About Us</span>
                        <h2>Sustainable Agriculture And Environmental</h2>
                            Smart-Tech offers cutting-edge cloud-based farm management software designed
                            to revolutionize agriculture. From data management to resource optimization and
                             business intelligence, <br /> our platform is tailored to meet 
                              <br />the evolving 
                             needs of farmers worldwide.
                        <ul>
                            <li>to revolutionize agriculture. From data management to resource optimization and</li>
                            <li>to revolutionize agriculture. From data management to resource optimization and</li>
                            <li>to revolutionize agriculture. From data management to resource optimization and</li>
                        </ul>
                        <div className="sub-containers">
                            <div className="sub-img">
                                <img src={Img} alt="sub-img" />
                                <p>
                                    Adebi Boateng <br />
                                    <em>CTO</em>
                                </p>
                                
                            </div>
                            
                            <button>Discover more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;