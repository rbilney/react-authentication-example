import React from 'react';
import { useAuth } from '../context/Auth';

export const Logout = () => {
    const { setAuthTokens } = useAuth();

    function logOut() {
        setAuthTokens("");
    }

    return (
        <div>
           <button onClick={logOut}>Logout</button> 
        </div>
    )
}
