
import './Login.css';
import bgimage from '../../Images/Image1.jpeg';
import Gicon from '../../Images/Google-icon.png';
import { Link } from "react-router-dom";
import React, {useState} from 'react'
import validation from '../../Validations/LoginValidations';

const Login =()=>{

    const[values, setValues]=useState(
        {
            emali:'',
            password:''
        }
    )

    const[errors, setErrors] =useState({})

    const handleInput= (event) =>{
        setValues(prev =>({...prev,[event.target.name]: [event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
    }


    return(
        <div class="Login">
            <div className="loginsection">
                <div className="leftlogin">
                    <div className="img-section">
                        <div className="head-text">
                            <h1 className="Text-H"> Turn your ideas <br/>into reality</h1>
                            <p className="Text-p">Start for fre and get attractive offers <br/>from the community</p>
                        </div>
                        <img src={bgimage} alt="" className="bgimage"/>
                    </div>
                    </div>
                    <div className="rightlogin">
                        <div className=" form-c-H">
                            <div className="form-c">
                                <h3 className="head-form">Login</h3>
                                <p className="form-p">Welcome Back! Please Details.</p>
                            </div>
                            <form action="" onSubmit={handleSubmit}>

                            <div className="form-in">
                                <input type="email" placeholder="Email" name="email" onChange={handleInput}/>
                                {errors.emali && <span className="error-span">{errors.emali} </span>}
                                <input type="Password" placeholder="password" name="password" onChange={handleInput}/>
                                {errors.password && <span className="error-span">{errors.password} </span>}

                            </div>
                            <div className="Forgot-c">
                                <div className="F-text">
                                    <input type="checkbox"></input>
                                    <p>Remember Me for 30 days</p>

                                    <div> <p className="F-Link">Forgot password?</p></div>
                                   
                                </div>
                            </div>
                            <div className="Log-button">
                                <button  type ="submit" className="Log-b">Log in</button>
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
                                </form>
                            </div>
                            <div className="bottom-form">
                                <p>Don't have an Account? <Link to ="/Register" className="links"> <span>Signup</span></Link></p>
                            </div>
                        </div>
                </div>
            </div>
       
    )
}
export default Login