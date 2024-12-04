import { Link } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa";
import { AiOutlineHistory } from 'react-icons/ai';
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import ToggleSwitch from "./smallComponents/ToggleSwitch.jsx";



const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = document.querySelector('.header').offsetHeight;
            if (window.scrollY > headerHeight / 2) {    
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <>
            {isSticky && <div style={{ height: '5em' }} />}
            <nav className={`header ${isSticky ? 'sticky' : 'not-sticky'} theme-${theme} ${theme === "dark" ? "dark-border" : "default-border"}`}>
                <ul className="navbar">
                    <li>
                        <div className="icon-col">

                            <Link to="/">
                                <FaHome className="icon" />
                                <span className="icon-label">Home</span>
            {/* Spacer div to maintain layout when header becomes sticky */}
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
                    <ToggleSwitch />
                </ul>
            </nav>
        </>
    );
};

export default Header;