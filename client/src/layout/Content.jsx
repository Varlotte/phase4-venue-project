import React from "react";
import {BsFillCircleFill} from 'react-icons/bs'

function Content() {
    return (
        <div className="content">
            <h1 style ={{fontFamily: ''}}> What to expect: </h1>
            <ul style = {{fontSize: '15px'}}><BsFillCircleFill /> Weekly emails about what HOT events are happening near you</ul>
            <ul style = {{fontSize: '15px'}}><BsFillCircleFill /> One free ticket each month</ul>
            <ul style = {{fontSize: '15px'}}><BsFillCircleFill /> Get priority for events with a waitlist</ul>
        </div>
    )
}

export default Content