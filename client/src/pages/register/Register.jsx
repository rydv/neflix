import { useRef, useState } from "react";
import "./register.scss";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
        setUsername(usernameRef.current.value);
    }

    const handleFinish = async (e) => {
        e.preventDefault()
        try {
            setPassword(passwordRef.current.value)
            await axios.post('auth/register',{username,email,password});
            navigate('/login');
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">
                <img 
                className="logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                alt="" />
                <button className="loginButton" >Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV Shows and more</h1>
            <h2>Watch anywhere, Cancel anytime</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            {!email ? (
            <>
                <form className="input">
                    <input type="username" placeholder="username" ref={usernameRef}/>
                    <input type="email" placeholder="email address" ref={emailRef}/>
                    <button className="registerButton" onClick={handleStart}>Get Started</button>
                </form>
                <span style={{'cursor':'pointer'}} onClick={()=>navigate('/login')}>Already have account? <b>Sign In</b></span>
            </>

            ) : (
                <form className="input">
                    <input type="password" placeholder="password" ref={passwordRef}/>
                    <button className="registerButton" onClick={handleFinish}>Start</button>
                </form>
                )}
        </div>
    </div>
  )
}
