
import React, { useContext } from "react";
import "../../styles/ToggleSwitch.css";
import { ThemeContext } from "../../context/ThemeContext";
import sunIcon from "../../assets/sun-icon.png";
import moonIcon from "../../assets/moon-icon.png";
const ToggleSwitch = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const isToggled = theme === "dark";

    const handleToggle = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    };

    return (
        <div className={`toggle-switch ${isToggled ? 'active' : ''}`} onClick={handleToggle}>
            <div className={`toggle-switch-circle ${isToggled ? 'active' : ''}`}>
                <img src={isToggled ? moonIcon : sunIcon} alt={isToggled ? "Moon" : "Sun"} />
            </div>
        </div>
    );
};

export default ToggleSwitch;