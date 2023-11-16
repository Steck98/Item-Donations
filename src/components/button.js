import React  from 'react'
import '../assets/styles/button.css'


const Button = (props) => {
    

    
    return ( 
        <button
        className={props.variant}
        >
        {props.label}
        </button>
     );
}

export default Button ;