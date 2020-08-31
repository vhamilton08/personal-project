import React from 'react'
import './About.css'

const About = () => {
    return(

        <div>
            <h1>OUR STORY</h1>
            <h3>The road to Raising Cane's has been an incredible entreprenuerial adventure.</h3>
            <p>Our Founder, Todd Graves(Founder, CEO, Fry Cook, Cashier) took a few pictures along the way.
                Flip through and find out what it took to bring his dream to of Raising Cane's to reality.</p>
                <div className="container">
                    <div className="box"><img alt='first' src='https://www.raisingcanes.com/sites/default/files/flip/flip001.png'/></div>
                    <div className="box"><img alt='second' src='https://www.raisingcanes.com/sites/default/files/flip/flip002.png'/></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
        </div>
    )
}

export default About