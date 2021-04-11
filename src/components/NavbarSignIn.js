// import a icon
import { IoPlanetSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import '../css/NavbarSignIn.css'
// import for useState for Hooks
import React, { useState } from 'react';
// I use this to scroll to component cost LINK word is used on react-route
import { HashLink } from 'react-router-hash-link';

const NavbarSignIn = () => {

    // for the nav hamburger
    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            {/* start of navbar */}
            {/* here {navbar} is a hook that will produce true or false (ternary condition)  */}
            <nav className="navbar navBG fixed-top navbar-expand-lg navbar-dark p-md-3" >
                <div className="container">
                    <a className="navbar-brand" ><h2><Link to="/"><span className="navTittle">Planets.</span > <IoPlanetSharp className="navIcon mb-2 me-5" /></Link></h2></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setNavOpen(!navOpen)}>
                        {navOpen ? <HiX className="navTogglerClose" /> : <HiOutlineMenu className="navTogglerOpen" />}
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link">
                                    <h5>
                                        <HashLink smooth to='/' className="btnBackToHome"><AiFillHome className="mb-2 me-1" />Home</HashLink></h5></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* end of navbar */}
        </>
    )
}

export default NavbarSignIn

