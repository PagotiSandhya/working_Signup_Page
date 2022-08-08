import React from 'react';
import signpic from "../images/signup.svg";

const Signup = () =>{ 
    return (
        <section className="signup">
            <div className="container mt-5">
                <div className="signup--content">
                    <div  className="signup-form">
                        <h2 classNmae="form-title">Sign Up</h2>
                        <form className="register-form" id="register-form">
                            <div className="form-group">
                                <lable htmlFor="name">
                                <i class="zmdi zmdi-account  material-icons-name"></i> 
                                </lable>
                                <input type="text" name="name" id="name" autoComplete="off" placeholder="your name "></input>
                            </div>
                            <div className="form-group">
                                <lable htmlFor="name">
                                <i class="zmdi zmdi-account  material-icons-name"></i> 
                                </lable>
                                <input type="text" name="name" id="name" autoComplete="off" placeholder="your name "></input>
                            </div>
                            <div className="form-group">
                                <lable htmlFor="email">
                                <i class="zmdi zmdi-email material-icons-name"></i> 
                                </lable>
                                <input type="email" name="email" id="email" autoComplete="off" placeholder="your email "></input>
                            </div>
                            <div className="form-group">
                                <lable htmlFor="phone">
                                <i class="zmdi zmdi-phone-in-talk  material-icons-name"></i> 
                                </lable>
                                <input type="number" name="phone" id="phone" autoComplete="off" placeholder="your phone number "></input>
                            </div>
                            <div className="form-group">
                                <lable htmlFor="work">
                                <i class="zmdi zmdi-slideshow  material-icons-name"></i> 
                                </lable>
                                <input type="text" name="work" id="work" autoComplete="off" placeholder="your Profession "></input>
                            </div>
                            <div className="form-group">
                                <lable htmlFor="password">
                                <i class="zmdi zmdi-lock  material-icons-name"></i> 
                                </lable>
                                <input type="password" name="password" id="password" autoComplete="off" placeholder="your password "></input>
                            </div>
                            <div className="form-group">
                                <lable htmlFor="password">
                                <i class="zmdi zmdi-lock  material-icons-name"></i> 
                                </lable>
                                <input type="password" name="password" id="password" autoComplete="off" placeholder="confirm your password "></input>
                            </div>
                            <div className="form-group form-button">
                            <input type="submit" name="signup" id="signup" className="form-submit"
                             value="register"></input>
                            </div>
                        </form>
                    </div>
                        <div className="signup-image">
                            <figure>
                                <img src={signup}  alt="registration pic"/>
                            </figure>
                            <Navlink to="/login" className="signup-image-link">I am already registered</Navlink>
                        </div>
                    </div>
                    
                </div>
        </section> 
    )
}
export default Signup