import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
      e.preventDefault();

      //Somme Fancy Firebase Login Key

    }

    const register = e => {
       e.preventDefault() 

       // do some fancy firebse register
    }


  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://capebretonspectator.com/wp-content/uploads/2018/01/Amazon-Logo.jpg"
          alt="amazon logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign -In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange= {e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password"  value={password} onChange
          = {e => setPassword(e.target.value)}/>
          <button type='submit' onClick={signIn}
          className="login__signInButton">Sign in</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON 'REPLICA' CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
         

         <button onClick={register} 
         className="login__registerButton">Create Your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
