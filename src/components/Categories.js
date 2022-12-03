import React from 'react'
import '../css/categories.css'
import Burger from '../img/burger1.png'
import Pasta from '../img/pasta.png'
import Fries from '../img/fries2.png'

const categories = () => {
    return (
        <div className='categories' id="categories">
            <h1>Categories</h1>
            <div className="categories-container">
                <div className="burger">
                    <div className="burger-text">
                        <h1>Chicken Burger</h1>
                        <button>SHOP NOW</button>
                    </div>
                    <img src={Burger} alt="" />
                </div>
                <div className="pasta">
                    <div className="pasta-text">
                        <h1>Chicken Pasta</h1>
                        <button>SHOP NOW</button>
                    </div>
                    <img src={Pasta} alt="" />
                </div>
                <div className="fries">
                    <div className="fries-text">
                        <h1>French Fries</h1>
                        <button>SHOP NOW</button>
                    </div>
                    <img src={Fries} alt="" />
                </div>

            </div>
        </div>
    )
}

export default categories