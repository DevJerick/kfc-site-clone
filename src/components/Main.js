import React from 'react'
import MainImage from '../img/main.png'
import '../css/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const main = () => {
    return (
        <main id="main">
            <div className="main-container">
                <div className="main-text">
                    <h1>KFC HOT FRIED CHICKEN</h1>
                    <p>KFC (Kentucky Fried Chicken) is an American fast food restaurant chain headqaurtered</p>

                    <button>
                        <span>Learn More</span>
                        <i>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </i>
                    </button>
                </div>

                <img src={MainImage} alt="" />
            </div>
        </main>
    )
}

export default main