import React from 'react';
import FooterLogo from '../assets/footer-logo.png';

function Footer () {
    return (
        <footer className='footer'>
            <div className='footer-nav'>
                <div className='footer-col'>
                    <img src={FooterLogo} alt="Logo" width="150"/>
                </div>
                <div className='footer-col'>
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/menu">Events</a></li>
                        <li><a href="/reservation">About Us</a></li>
                        <li><a href="/contact">Videos</a></li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>Contact Information</h4>
                    <div className='contact-info'>
                        <div className='contact-line'>
                            <i class="fa-solid fa-envelope" style={{ color: '#f6f6e9' }}></i><a href="mailto:shadimaks93@gmail.com">shadimaks93@gmail.com</a>
                        </div>
                        <div className='contact-line'>
                            <i class="fas fa-location-dot" style={{ color: '#f6f6e9' }}></i><p>  Düsseldorf, NRW</p>
                        </div>
                    </div>
                </div>
                <div className='footer-col'>
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://m.facebook.com/@habibi.act"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.youtube.com/@HabibiAct"><i className="fab fa-youtube"></i></a>
                        <a href="https://www.instagram.com/habibiact/"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <hr className='footer-line'></hr>
            <div className='copyright'>
                <p>&copy; <span id="copyrightYear"></span> Habibi Act!. All rights reserved.</p>
                <p> Website Development & Visual Identity: Shadi max </p>
            </div>
        </footer>
    );
}

export default Footer;