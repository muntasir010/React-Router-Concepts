import { Link, NavLink } from "react-router-dom";
import './header.css';

const Header = () => {
   
    return (
        <div>
            <h1>Nav bar creating started</h1>
            <nav>
                <h1>My Website</h1>
                <br />
                <div className="allInOne">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    {/* <Link to="/users">Users</Link> */}
                    {/* <Link to="/posts">Posts</Link> */}
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/posts">Posts</NavLink>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;