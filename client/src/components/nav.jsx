import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import React, { Component } from 'react';

class Navbar extends Component {
    state = {clicked: false};
    handClick = () => {
        this.setState({clicked:
        !this.state.clicked})
    };
        render () {
    const linkClassName = 'nav-list';
    return (
        <>
            <nav className="navigation">
            <div className='navContainer'>
                <div className='hamburger' onClick={this.handClick}>
                    <i className={this.state.clicked ? 
                    'fa fa-times' :'fa fa-bars' }
                        style={{
                               color: 'rgb(019, 170, 150)',
                               fontSize: '200px',
                               fontWeight: '900',
                               }}
                    ></i>
                </div>
               
            </div>
                
                    
            
               
                <ul id="nav-items" className={this.state.clicked ? 
                'nav-items active' : 'nav-items'}>
                    <li className={linkClassName}><Link to='/'><FontAwesomeIcon icon={faFacebookF} size='lg' style={{color: "#FF0000",}} /></Link></li>
                    <li className={linkClassName}><Link to='/'><FontAwesomeIcon icon={faGithub} size='lg' style={{color: "#FF0000",}} /></Link></li>
            
                    <li className={linkClassName}><Link to='/'><FontAwesomeIcon icon={faTwitter} size='lg' style={{color: "#FF0000",}} /></Link></li>
                    <li className='search'><FontAwesomeIcon icon={faSearch} size='sm' />
</li>


                </ul>
            </nav>
          
        </>
    )
}
}
    

export default Navbar;