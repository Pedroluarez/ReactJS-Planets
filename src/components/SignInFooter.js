// import a icon
import { IoPlanetSharp } from "react-icons/io5";
import '../css/SignInFooter.css'

const SignInFooter = () => {
    return (
        <>
            <section className="FooterSection">
                <div className="container">
                    <p className="footerIcon text-center"><h2>Planets.<IoPlanetSharp className="mb-1 me-5" /></h2></p>
                </div>
                <div className="footerEnder text-center">
                    © Copyright Planets. All Rights Reserved
                </div>
            </section>
        </>
    )
}

export default SignInFooter
