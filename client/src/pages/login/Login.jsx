import axios from "axios";
import "./login.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { login } from "../../authContext/apiCalls";
import { Navigate, useNavigate } from "react-router";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit= async (e) => {
        e.preventDefault()
        login({email,password},dispatch)
    }
  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
                <img 
                className="logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                alt="" />
            </div>
        </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email or phone nubmer" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button className="loginButton" onClick={handleSubmit}>Sign In</button>
                <span>New to Netflix? <b style={{'cursor':'pointer'}}onClick={()=>navigate('/register')}>Sign up now.</b></span>
                <small>
                    This page is protected by Google reCAPTCHA to esure you're not a bot. <b>Learn more</b>.
                </small>
            </form>
        </div>
    </div>
  )
}
