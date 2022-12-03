import { useState } from 'react'
import '../css/navbar.css'
import Logo from '../img/logo/Logo1.png'
// import Button from './Button.jsx'

const Navbar = () => {

    const [btnState, setBtnState] = useState(false)

    const afterClick = () => {
        setBtnState(btnState => !btnState)
    }

    let toggleClassCheck = btnState ? ' bx-x' : ' bx-menu';
    let toggleClassNav = btnState ? 'open' : '';

    return (
        <nav id='home'>
            <div className="nav-container">
                <a href="/">
                    <img src={Logo} alt="" />
                </a>

                <ul className={toggleClassNav}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#categories">Categories</a></li>
                    <li><a href="#product">Product</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>

                <button onClick={afterClick}>
                    <i className={`bx${toggleClassCheck}`} id='menu'></i>
                </button>

                {/* <Button /> */}
            </div>
        </nav>
    )
}

export default Navbar