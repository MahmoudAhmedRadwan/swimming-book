import React from 'react';
import { Link } from 'react-router-dom';
import './ForgetPassword'

class ForgetPassword extends React.Component {
    render(){
        return(
            <div className="login-page-full-width">
                <div className="login-page">
                    <div className="log-in_container">
                        <h3>Swimming</h3>
                        <div className="logIn_body">
                            <p> Password? <span>Forgot</span></p>
                            <p className="forGet_description">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  </p>
                            <input type="email" placeholder="email@domain.com" />
                            <div className="logIn_footer">
                                <button className="logIn_Btn">Sign Up</button>
                                <Link to="/Login">Registration</Link>
                            </div>
                        </div>
                        <div className="webSite_links">
                            <a href="#">Contact Us</a>
                            <a href="#">Privacy</a>
                            <a href="#">About</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForgetPassword;