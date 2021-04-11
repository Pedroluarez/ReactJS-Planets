// import a icon
import { IoPlanetSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaGlobeAsia } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { BiLogIn } from "react-icons/bi";
// import the css
import '../css/Main.css';
import '../css/Navbar.css';
// import for useState for Hooks
import React, { useState } from 'react';
// I use this for smooth scoll to top
import { Link, animateScroll as scroll } from 'react-scroll';
// I use this to scroll to component cost LINK word is used on react-route
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
    // Hooks are equivalent of jquery but since is react js this is their way to target a class

    // set the navbar as a variable setNavbar is false
    const [navbar, setNavbar] = useState(false);
    // create a condition that will trigger the navbar via true or false
    const changeBG = () => {
        if (window.scrollY >= 90) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBG);

    // for the nav hamburger
    const [navOpen, setNavOpen] = useState(false);

    // smooth scroll to home btn
    const scrollToHome = () => {
        scroll.scrollToTop({
            duration: 250,
            delay: 100,
            smooth: 'easeInOutQuint',
        })
    }

    return (
        <>
            {/* start of navbar */}
            {/* here {navbar} is a hook that will produce true or false (ternary condition)  */}
            <nav className={navbar ? 'navbar navBG fixed-top navbar-expand-lg navbar-dark p-md-3' : 'navbar fixed-top navbar-expand-lg navbar-dark p-md-3'}>
                <div className="container">
                    <a className="navbar-brand" to='/' onClick={scrollToHome}><h2> <span className="navBarTittle">Planets.</span > <IoPlanetSharp className="navIcon mb-2 me-5" /></h2></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setNavOpen(!navOpen)}>
                        {navOpen ? <HiX className="navTogglerClose" /> : <HiOutlineMenu className="navTogglerOpen" />}
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link navLinkBtn" onClick={scrollToHome}>
                                    <h5><span data-bs-toggle="collapse" data-bs-target="#navbarNav" onClick={() => setNavOpen(!navOpen)}
                                    ><AiFillHome className="mb-1 me-1" />Home</span></h5></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <h5><span data-bs-toggle="collapse" data-bs-target="#navbarNav"><Link activeClass="active"
                                        to="AboutSection"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                        onClick={() => setNavOpen(!navOpen)}
                                    ><AiFillQuestionCircle className="mb-1 me-1" />About</Link> </span></h5></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <h5><span data-bs-toggle="collapse" data-bs-target="#navbarNav"><Link activeClass="active"
                                        to="PlanetSection"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                        onClick={() => setNavOpen(!navOpen)}
                                    ><FaGlobeAsia className="mb-1 me-1" />Planets</Link></span></h5></a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-success pt-2 ">
                                    <h5>
                                        <HashLink smooth to='/sign' className="btnSignIN"><BiLogIn className="mb-1" /> Login</HashLink></h5></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* end of navbar */}
        </>
    )
}

export default Navbar

