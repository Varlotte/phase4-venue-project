import React, {useRef, useEffect} from "react";
import {Link} from 'react-router-dom';
import Welcome from "./Welcome";
import '../layout/Home.css'

function Home() {
  

  const aboutScroll = useRef(null)

  useEffect(() => {
    const element = aboutScroll.current;
    console.log(element); // 👈️ element here
  }, []);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
      top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }


  return (
    <div>
      <div className="middle">
        <Link to="/home" className="homeBtn">
          <button className="homeBtn">Welcome</button>
        </Link>
      </div>
      <div className="scroll">
          <h1 onClick={() => scrollToSection(aboutScroll)}>About us.</h1>
      </div>
      <div className="about" ref={aboutScroll}>
        <Welcome />
      </div>
    </div>
  );
}

export default Home;
