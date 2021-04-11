import Loader from "react-loader-spinner";
import '../css/Preloader.css'

const Preloader = () => {
    return (
        <>
            <div className="preLoader text-center">
                <Loader
                    type="BallTriangle"
                    color="#ffffff"
                    height={100}
                    width={100} />
                <h4 className="mt-3 text-light">Loading... Please wait</h4>
            </div>
        </>
    )
}
export default Preloader
