import Astro from '../img/Astro.jpg';
import '../css/Parallax.css';
// plugin parallax
import { Parallax } from 'react-parallax';

const ParallaxSection = () => {
    return (
        <>
            <section className="parallaxSection">
                <Parallax bgImage={Astro} bgImageAlt="Astro" strength={900} className="parallax img-fluid">
                </Parallax>
            </section>
        </>
    )
}

export default ParallaxSection

