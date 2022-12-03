import React from 'react'
import '../css/newsletter.css'

const newsletter = () => {
    return (
        <div className='newsletter' id='newsletter'>
            <div className="newsletter-container">
                <h1>JOIN OUR NEWSLETTER</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque et voluptas, ab excepturi porro odio vitae. Voluptatem, dolores. Saepe, atque.</p>
                <div className="input">
                    <input type="text" placeholder='Enter Your Email' />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default newsletter