import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react'
import "../../assets/styles/signIn.css"

const SignIn = () => {
return (
    <Router >
        <div className="wrapper">
        <Link className="signIn__element">
            Zaloguj 
        </Link>
        <Link className="signIn__element">
            Załóż Konto
        </Link>
        </div>
    </Router>
    
);
}
export default SignIn