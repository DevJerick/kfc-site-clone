import React from 'react'
import '../css/product.css'
import burger from '../img/burger2.png'
import fries from '../img/fries1.png'
import chicken from '../img/chicken.png'
import pizza from '../img/pizza.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons'

const product = () => {
    return (
        <div className='product' id="product">
            <h1>OUR PRODUCT</h1>
            <div className="product-container">
                <div className="box">
                    <img src={burger} alt="" />
                    <div className="product-text">
                        <h3>Chicken Burger</h3>
                        <p>$5.00</p>
                        <div className="rating">
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                        </div>
                        <button>
                            <span>ADD CARD</span>
                            <i>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </i>
                        </button>
                    </div>
                </div>
                <div className="box">
                    <img src={fries} alt="" />
                    <div className="product-text">
                        <h3>French Fries</h3>
                        <p>$5.00</p>
                        <div className="rating">
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                        </div>
                        <button>
                            <span>ADD CARD</span>
                            <i>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </i>
                        </button>
                    </div>
                </div>
                <div className="box">
                    <img src={chicken} alt="" />
                    <div className="product-text">
                        <h3>Fried Chicken</h3>
                        <p>$5.00</p>
                        <div className="rating">
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                        </div>
                        <button>
                            <span>ADD CARD</span>
                            <i>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </i>
                        </button>
                    </div>
                </div>
                <div className="box">
                    <img src={pizza} alt="" />
                    <div className="product-text">
                        <h3>Chicken Pizza</h3>
                        <p>$5.00</p>
                        <div className="rating">
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                        </div>
                        <button>
                            <span>ADD CARD</span>
                            <i>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default product