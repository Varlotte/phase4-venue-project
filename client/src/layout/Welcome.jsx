import React from "react";
import '../layout/Welcome.css';
import RestfulImage from '../layout/RestfulImage.jpg'
import sergio from '../layout/sergio.jpeg'
import idalis from '../layout/idalis.jpeg'
import charlotte from '../layout/charlotte.jpg'


function Welcome() {

    return (
        <div className="about-container">
        <h4 className="headerText">Welcome to the Restful</h4>
        <img src={RestfulImage} className="image"/>
        <p className="about-text">
          Founded in 1980 by a collective of backend
          engineers, this versatile venue has it all- a main stage, private
          booths, VIP area, and a full-service kitchen! Easily accessible on all
          major routes and ADA compatible so everyone can have a good time. Come
          to one of our events, or host your own with us!
        </p>
        <h3 className="founderText">Founders</h3>
            <div className="founder-container">
                <img src = {sergio} className="founder-image"/>
                <img src = {charlotte} className="founder-image"/>
                <img src = {idalis} className="founder-image"/>
            </div>
        </div>
    )
}

export default Welcome

