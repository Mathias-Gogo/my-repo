import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";
import "./navbar.css";

export default function Navbar() {
    return(
        <div className="navbar">
            <nav>
                <div className="logo">
                    <img src={logo} alt="mexuri" />
                </div>
            </nav>

            <div className="navbar-links">
                <ul>
                    <li className="bigMedia"><Link to="/">Home</Link></li>
                    <li className="bigMedia"><Link to="/about">About</Link></li>
                    <li className="bigMedia"><Link to="/services">Services</Link></li>
                    <li className="bigMedia"><Link to="/contact">Contact</Link></li>

                    <li className="media"><Link><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></Link></li>
                </ul>
            </div>
        </div>
    )
}