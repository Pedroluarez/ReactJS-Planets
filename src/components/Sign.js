import '../css/Sign.css';
import NavbarSignIn from '../components/NavbarSignIn';
import SignInContent from '../components/SignInContent';
import SignInFooter from '../components/SignInFooter'

const Sign = () => {
    return (
        <>
            <section id="signIn" className="signIn">
                <NavbarSignIn />
                <SignInContent />
                <SignInFooter />
            </section>
        </>
    )
}

export default Sign
