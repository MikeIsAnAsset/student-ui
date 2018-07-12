import React from 'react';
import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
import Route from 'react-router-dom';
import Header from '../Header/Header';
import SignUp from '../SignUp/SignUp';
import AboutUs from '../AboutUs/AboutUs';

const aboutUs = (props) => {
    return (
        <div>

            <div className="w3-content" style={{ 'max-width': '1200px' }}>

                <div className="w3-panel">
                    <li className="w3-xlarge fa fa-bars"></li>
                </div>

                <br></br>
                <br></br>

                {/* First Grid:  Logo & aboutUs */}

                <div className="w3-row">
                    <div className="w3-half w3-container">
                        <h1 className="w3-xxlarge w3-text-light-grey">Hello</h1>
                        <h1 className="w3-xxlarge w3-text-grey">We are</h1>
                        <h1 className="w3-jumbo">InShock</h1>
                    </div>
                    <div className="w3-half w3-container w3-xlarge w3-text-grey">

                        <p className="">We build design teams
                            - we break things down and build it better
                - we deliver the best of solutions</p>
                        <p>InShock means powerful simplicity</p>
                    </div>
                </div>

                {/* Second Grid:  Resent */}
                <div className="w3-panel w3-text-grey">
                    <h4>MOST RECENT WORK:</h4>
                </div>
                <div className="w3-row">
                    <div className="w3-half w3-container">
                        <img src={pic1} style={{ width: '50%' }} />
                        <br></br><br></br>
                        <img src={pic2} style={{ width: '50%' }} />
                        <p className="w3-xlarge w3-text-grey">
                            Demos, Logos, Reports, Names, Events, Media, Wordpress, Google, Books, Optimisations</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutUs;