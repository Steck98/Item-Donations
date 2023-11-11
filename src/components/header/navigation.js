import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../assets/styles/navigation.css'
const  NavigationMenu = () => {
    return (
        <Router className="wrapper">
            <div>
            <ul>
                <li><Link to="/">Start</Link></li>
                <li><Link to="/">O Co Chodzi?</Link></li>
                <li><Link to="/">O Nas</Link></li>
                <li><Link to="/">Fundacja i organizacje </Link></li>
                <li><Link to="/">Kontakt</Link></li>
            </ul>
            </div>
        </Router>
    );



}
export default NavigationMenu;