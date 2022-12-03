import React from 'react'
import '../css/about.css'
import About from '../img/about.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const about = () => {
    return (
        <div className='about' id="about">
            <div className="about-container">
                <img src={About} alt="" />

                <div className="about-text">
                    <h3>ABOUT US</h3>
                    <h1>KFC CHICKEN BURGER</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur sunt expedita quod explicabo praesentium, hic distinctio magnam qui deserunt, eaque dolorem rem perspiciatis debitis animi assumenda excepturi, quidem vel temporibus facere ducimus blanditiis adipisci mollitia et. Suscipit debitis dolor perferendis?</p>
                    <button>
                        <span>LEARN MORE</span>
                        <i> <FontAwesomeIcon icon={faAngleRight} /> </i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default about