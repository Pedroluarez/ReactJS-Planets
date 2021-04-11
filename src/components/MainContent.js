// import the background vg
import outerSpace from '../videos/outerSpace.mp4';
// import icon 
import { BsFillCaretDownFill } from "react-icons/bs";
// import the css
import '../css/Main.css';
import '../css/MainContent.css';
// import animation plugin
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
    "Planets",
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
];


const MainContent = () => {
    // plugin for the text
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    })


    return (
        <>
            <div className="MainSection">
                <video autoPlay loop muted
                    style={{
                        position: "fixed",
                        width: "100%",
                        height: "100vh",
                        objectFit: "cover",
                        filter: "brightness(75%)",
                        // stacking of layers of a web page
                        zIndex: "-1",
                    }}>
                    <source src={outerSpace} type="video/mp4" />
                </video>
                <div className="container text-center text-white ">
                    <Fade bottom>
                        <p className="Main text-center">
                            <TextTransition
                                text={TEXTS[index % TEXTS.length]}
                                springConfig={presets.stiff}
                            />
                        </p>
                        <p className="question text-center">What are you waiting?</p>
                        <a className="btnStarted btn btn-light text-center"><Link activeClass="active"
                            to="AboutSection"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >GET STARTED</Link><BsFillCaretDownFill className="ms-1 mb-1" /></a>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default MainContent