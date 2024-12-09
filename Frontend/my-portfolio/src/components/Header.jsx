import { Link } from "react-router-dom";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { GiLightBulb } from "react-icons/gi";
import { FaTimeline } from "react-icons/fa6";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import ToggleSwitch from "./smallComponents/ToggleSwitch.jsx";

const Header = ({ isAboutPage }) => {
    const [isSticky, setIsSticky] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        let animationFrameId;
        const handleScroll = () => {
            animationFrameId = requestAnimationFrame(() => {
                const headerHeight = document.querySelector('.header').offsetHeight;
                if (window.scrollY > headerHeight / 2) {
                    if (!isSticky) {
                        setIsTransitioning(true);
                        setTimeout(() => {
                            setIsSticky(true);
                            setTimeout(() => setIsTransitioning(false), 50);
                        }, 50);
                    }
                } else {
                    if (isSticky) {
                        setIsTransitioning(true);
                        setTimeout(() => {
                            setIsSticky(false);
                            setTimeout(() => setIsTransitioning(false), 50);
                        }, 50);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isSticky]);

    const headerClasses = `header ${isSticky ? 'sticky' : 'not-sticky'} ${isTransitioning ? 'transitioning' : ''} theme-${theme} ${theme === "dark" ? "dark-border" : "default-border"} ${isAboutPage ? 'about-page' : ''}`;

    return (
        <>
            {isSticky && <div style={{ height: '5em' }} />}
            <nav className={headerClasses}>
                <ul className="navbar">
                    <ToggleSwitch />
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
                                <BsFileEarmarkCodeFill className="icon" />
                                <span className="icon-label">Projects</span>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="icon-col">
                            <Link to="/Skills">
                                <GiLightBulb className="icon" />
                                <span className="icon-label">Skills</span>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="icon-col">
                            <Link to="/CareerTimeline">
                                <FaTimeline className="icon" />
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
            </nav>
        </>
    );
};

export default Header;