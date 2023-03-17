
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
        </div>
    );
};

export default Header;