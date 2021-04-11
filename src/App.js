import React, { useState, useEffect } from 'react';
// import the navbar components
import Navbar from './components/Navbar';
// import the main content
import MainContent from './components/MainContent';
import About from './components/About';
import Planet from './components/Planets'
import Footer from './components/Footer'
import Loader from './components/Preloader'
import ToTop from './components/ToTop'
import Parallax from './components/ParallaxSection'



const App = () => {
    const [preLoader, setPreLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setPreLoader(false)
        }, 3000);
    })

    return (
        <div className="App">
            {preLoader ? <Loader /> :
                <MainContent />}
            <ToTop />
            <Navbar />
            <About />
            <Parallax />
            <Planet />
            <Footer />

        </div >
    )
}

export default App


