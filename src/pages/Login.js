import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../context/Auth';

function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
    const referer = props.location.state.referer || '/';

    function postLogin(){
        //axios.post("https://www.somePlace.com/auth/login", {
        //    userEmail,
        //    password
        //  }).then(result => {
        //    if (result.status === 200) {
        //      setAuthTokens(result.data);
        //      setLoggedIn(true);
        //    } else {
        //      setIsError(true);
        //    }
        //  }).catch(e => {
        //    setIsError(true);
        //  });
      
        setAuthTokens("test");
        setLoggedIn(true);
    }

    if (isLoggedIn) {
        return <Redirect to={referer} />;
    }

    return (
        <div>
            <form>
                <input type="email" placeholder="Email" value={userEmail} onChange={e => {
                    setUserEmail(e.target.value);
                }} />
                <input type="password" value={password} onChange={e => {
                    setPassword(e.target.value);
                }} placeholder="Password" />
                <button className="btn-primary" onClick={postLogin}>Sign in</button>
            </form>
        </div>
    )
}

export default Login
