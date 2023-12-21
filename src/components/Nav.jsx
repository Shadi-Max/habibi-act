import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/nav-logo.png';
import './styles.css'

class Nav extends Component {
    state = { clicked: false};

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked}); // handling the state for hamburger menu
    };

    render () {
    return (
        <nav className="navbar">
            <div className='navbar-logo'>
                <img src={Logo} alt='Habibi Act' width='75' onClick={() => { window.location.href = '/home' }}></img>
            </div>
            <div className='navbar-social-links'>
                <a href="https://m.facebook.com/@habibi.act"><i className="fab fa-facebook-f"></i></a>
  	 			<a href="https://www.youtube.com/@HabibiAct"><i className="fab fa-youtube"></i></a>
  	 			<a href="https://www.instagram.com/habibiact/"><i className="fab fa-instagram"></i></a>
            </div>
            <div className='menu-mobile' onClick={this.handleClick}>
                <i
                  id='bar'
                  className=
                  {this.state.clicked ?
                    'fas fa-xmark':
                    'fas fa-bars'
                    }
                ></i>
            </div>
            <div className='navbar-anchor-links'>
                <ul className={this.state.clicked ?
                ".navbar ul active" : ".navbar ul"}>
                    <li>
                        <a href='/home'>Home</a>
                    </li>
                    <hr></hr>
                    <li>
                        <a href="/events">Events</a>
                    </li>
                    <hr></hr>
                    <li>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={100}
                            onClick={this.handleClick}
                        >
                                About Us
                        </Link>
                    </li>
                    <hr></hr>
                    <li>
                        <a href='/videos'>Videos</a>
                    </li>
                </ul>
            </div>

        </nav>
    );
}
}

export default Nav;