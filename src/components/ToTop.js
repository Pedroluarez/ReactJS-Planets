import { AiFillUpSquare } from "react-icons/ai";
// import for useState for Hooks
import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import '../css/ToTop.css'

const ToTop = () => {
    const [toTop, setToTop] = useState(false);
    // create a condition that will trigger the navbar via true or false
    const showToTop = () => {
        if (window.scrollY >= 100) {
            setToTop(true)
        } else {
            setToTop(false)
        }
    }
    window.addEventListener('scroll', showToTop);

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
            {toTop ? <AiFillUpSquare className="ToTop" onClick={scrollToHome} /> : null}
        </>
    )
}

export default ToTop
