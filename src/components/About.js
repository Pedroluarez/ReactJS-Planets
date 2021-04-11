import '../css/About.css';
import Moon from '../img/Moon.svg';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <>
            <section className="AboutSection" id="AboutSection">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <Fade left>
                                <p className="aboutText">Who we are?</p>
                                <p className="aboutContentOne">
                                    Lorem ipsum dolor sit amet,  magna aliquam erat volutpat.</p>
                                <p className="aboutContentTwo">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            </Fade>
                        </div>
                        <div className="col-xl-7 ">
                            <Fade bottom>
                                <img src={Moon} className="aboutImage" />
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About

