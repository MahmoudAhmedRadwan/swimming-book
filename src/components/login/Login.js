import React, {useState} from 'react';
import { Link, useHistory} from 'react-router-dom';
import './Login.scss';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
function Login () {
    const [loginErr, setLoginErr] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory();
    const handelSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === '123456') {
            history.push("/")
        } else {
            setLoginErr(true)
        }
      }

        return(
            <div className="login-page-full-width">
                <div className="login-page">
                    <div className="log-in_container">
                        <h3>Swimming</h3>
                        <div className="logIn_body">
                            <p> Please log in <span>Welcome</span></p>
                            <input type="text" placeholder="User name" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <input type="password" placeholder="Passowrd" value={password} onChange={(e) =>setPassword(e.target.value)} />
                            {loginErr && <div className="login-err">Incorrect username or password</div> }
                            <div className="logIn_footer">
                                <button className="logIn_Btn" onClick={handelSubmit}>Log In</button>
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

export default Login;