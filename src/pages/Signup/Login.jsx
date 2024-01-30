import React from "react";
import './Login.css';
import bgimage from '../../Images/Image1.jpeg';
import Gicon from '../../Images/Google-icon.png';

const Login =()=>{
    return(
        <div class="background">
            <div className="wrapper">
                <div className="Container">
                    <div className="left-c">
                        <div className="head-text">
                            <h1 className="Text-H"> Turn your ideas in to reality</h1>
                            <p className="Text-p">Start for fre and get attractive offers from the community</p>
                        </div>
                        <img src={bgimage} alt="" className="bgimage"/>
                    </div>
                    <div className="right-c">
                        <div className=" form-c-H">
                            <div className="form-c">
                                <h3 className="head-form"> Login</h3>
                                <p className="form-p">Welcome Back! Please Details.</p>
                            </div>
                            <div className="form-in">
                                <input type="email" placeholder="Email"/>
                                <input type="Password" placeholder="password"/>
                            </div>
                            <div className="Forgot-c">
                                <div className="F-text">
                                    <input type="checkbox"></input>
                                    <p>Remember Me for 30 days</p>
                                </div>
                                <p className="F-Link">Forgot password?</p>
                            </div>
                            <div className="Log-Button">
                                <button className="Log-b">Log in</button>
                                <button className="Log-s">Register</button>
                            </div>
                            <div className="or-f">
                                <div className="or-f-s"></div>
                                    <p className="or-f-p">or</p>
                                </div>
                                <div>
                                    <button className="Log-s">
                                        <img src={Gicon} alt=""/>
                                        Sign In with Google
                                    </button>
                                </div>
                            </div>
                            <div className="bottom-form">
                                <p>Don't have an Account?<span>Signup</span></p>

                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};
export default Login;