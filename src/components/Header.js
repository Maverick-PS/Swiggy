import { useState } from "react";

const loggedInUser = () => {
    //API call to check authentication
    return true;
}


//Logo and Title


export const Title = () => (
    <a href="/">
        <img
        className="logo"
        alt="Swiggy" 
        src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"/>
    </a>
);

//Navigation Bar 
const Header = ()  => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {
                isLoggedIn ? ( 
                    <button onClick={()=>{setIsLoggedIn(false)}}>Logout</button> 
                ):( 
                    <button onClick={()=>{setIsLoggedIn(true)}}>Login</button>
                )
            }
        </div>
    );
};

export default Header;