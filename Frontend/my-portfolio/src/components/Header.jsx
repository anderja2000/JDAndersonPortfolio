import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import ToggleSwitch from "./smallComponents/ToggleSwitch.jsx";


const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);



    return (
        <nav className="header">
            <ul className="navbar">
                <li style={{ marginRight: '400px' }}>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/AboutMe">About Me</Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
                <li>
                    <Link to="/Skills">Skills</Link>
                </li>
                <li>
                    <Link to="/CareerTimeline">Career TimeLine</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                
            </ul>
            <ToggleSwitch/>
        </nav>
    );
};

export default Header;