import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import ForgetPassword from '../ForgetPassword/ForgetPassword';

class Login extends React.Component {
    render(){
        return(
            <div className="login-page-full-width">
                <div className="login-page">
                    <div className="log-in_container">
                        <h3>Swimming</h3>
                        <div className="logIn_body">
                            <p> Please log in <span>Welcome</span></p>
                            <input type="text" placeholder="User name" />
                            <input type="passowrd" placeholder="Passowrd" />
                            <div className="logIn_footer">
                                <button className="logIn_Btn">Log In</button>
                                <Link to="/ForgetPassword" >?Forget Your Passowrd</Link>
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

export default Login;