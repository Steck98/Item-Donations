
import React from 'react'
import { Link } from "react-router-dom";
import "../assets/styles/button.css"
import "../assets/styles/signIn.css"

const SignIn = () => {
    return (
       <nav>
        <ul className='wrapper'>
          <Link to="/SignIn" class="sign__button">
            Zaloguj 
          </Link>
          <Link to="/SignUp" class="sign__button">
            Załóż konto 
          </Link>
        </ul>
      </nav>

    )
}
export default SignIn;