import { NavLink } from "react-router-dom";
import "./login.css";


function Login() {
  return (
    <>
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h4 className="loginLogo">PrinceSocial</h4>
                <span className="loginDesc">
                    Connect with friends and the world around you on PrinceSocial
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" type="email" className="loginEmail" />
                    <input placeholder="Password" type="password" className="loginEmail" />
                    <NavLink className="nav-link loginBtn" to={"/home"} >Sign In</NavLink>
                    <span className="loginForgotPassword">Forgot Password?</span>
                    <NavLink className="loginRegister nav-link"
                     to={"/register"} >Create a New Account</NavLink>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Login;