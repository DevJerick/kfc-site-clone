import React from 'react'
import '../css/footer.css'
import Logo from '../img/logo/Logo1.png'

const footer = () => {
    return (
        <footer id='footer'>
            <div className="footer-container">
                <div className="upper-container">
                    <img src={Logo} alt="" />

                    <div className='footer-link'>
                        <ul>
                            <li>
                                Home
                            </li>
                            <li>
                                Categories
                            </li>
                            <li>
                                Product
                            </li>
                            <li>
                                About
                            </li>
                            <li>
                                Contact Us
                            </li>
                        </ul>

                        <button>Sign up</button>
                    </div>
                </div>
                <div className="bottom-container">
                    <p>TERM AND CONDITION</p>
                    <p className='copy'>COPYRIGHT DEVJERICK 2021</p>
                    <div className="social">
                        <i className='bx bxl-facebook'></i>
                        <i className='bx bxl-twitter'></i>
                        <i className='bx bxl-instagram-alt'></i>
                        <i className='bx bxl-gmail'></i>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default footer