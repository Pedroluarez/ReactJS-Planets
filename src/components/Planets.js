import '../css/Planet.css';
// import a icon
import { IoPlanetSharp } from "react-icons/io5";
import LookToMoon from '../img/LookToMoon.svg';
import Fade from 'react-reveal/Fade';


const Planets = () => {
    return (
        <>
            <section className="PlanetSection" id="PlanetSection">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <Fade bottom>
                                <img src={LookToMoon} className="PlanetSectionImg mt-5" />
                            </Fade>
                        </div>
                        <div className="col-xl-6">
                            <Fade right>
                                <p className="planetSectionHeader text-center">PLANETS.<IoPlanetSharp className="mb-2 me-5" /></p>
                                <p className="planetSectionContent text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat, sed diam nonummy nibh euismod tincidunt.</p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Planets
