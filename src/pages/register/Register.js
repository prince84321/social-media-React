import "./register.css";
import { NavLink } from "react-router-dom";


function Register() {
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
                    <input placeholder="Username" type="text" className="loginEmail" />
                    <input placeholder="Email" type="email" className="loginEmail" />
                    <input placeholder="Password" type="password" className="loginEmail" />
                    <input placeholder="Re-type Password" type="password" className="loginEmail" />
                    <NavLink className="loginBtn nav-link"
                     to={"/"} >Sign Up</NavLink>
                    <NavLink className="loginRegister nav-link"
                     to={"/"} >Login into Account</NavLink>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Register;