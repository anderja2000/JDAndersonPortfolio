import { Link } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa";
import { AiOutlineHistory } from 'react-icons/ai';
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import ToggleSwitch from "./smallComponents/ToggleSwitch.jsx";
import "../styles/Header.css";

const Header = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <nav className={`header theme-${theme} ${theme === "dark" ? "dark-border" : "default-border"}`}>
            <ul className="navbar">
                <li>
                    <div className="icon-col">
                        <Link to="/">
                            <FaHome className="icon" />
                            <span className="icon-label">Home</span>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="icon-col">
                        <Link to="/AboutMe">
                            <FaUser className="icon" />
                            <span className="icon-label">About Me</span>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="icon-col">
                        <Link to="/Projects">
                            <FaProjectDiagram className="icon" />
                            <span className="icon-label">Projects</span>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="icon-col">
                        <Link to="/Skills">
                            <FaTools className="icon" />
                            <span className="icon-label">Skills</span>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="icon-col">
                        <Link to="/CareerTimeline">
                            <AiOutlineHistory className="icon" />
                            <span className="icon-label">Career Timeline</span>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="icon-col">
                        <Link to="/Contact">
                            <FaEnvelope className="icon" />
                            <span className="icon-label">Contact</span>
                        </Link>
                    </div>
                </li>
            </ul>
            <ToggleSwitch />
        </nav>
    );
};

export default Header;