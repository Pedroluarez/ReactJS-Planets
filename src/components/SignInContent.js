import '../css/SignInContent.css';
import { IoPlanetSharp } from "react-icons/io5";

const SignInContent = () => {
    return (
        <>
            <div className="container">
                <p className="text-center logoContent"><IoPlanetSharp className="logoattrib" /></p>
                <div className="container">
                    <div className="SignInForm">
                        <div className="row mb-3">
                            <div className="col-xl-4">
                            </div>
                            <div className="col-xl-4 form-floating">
                                <input type="text" className="form-control text-center" placeholder="Username" />
                                <label for="floatingInput" className="ms-2">Username</label>
                            </div>
                            <div className="col-xl-4">
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-xl-4">
                            </div>
                            <div className="col-xl-4 form-floating">
                                <input type="password" className="form-control
                            text-center" placeholder="Password" />
                                <label for="floatingPassword" className="ms-2">Password</label>
                            </div>
                            <div className="col-xl-4">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4">
                            </div>
                            <div className="col-xl-4 text-center ">
                                <button type="button" class="btn btn-lg btn-success loginBtn "> Login</button>
                            </div>
                            <div className="col-xl-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInContent
