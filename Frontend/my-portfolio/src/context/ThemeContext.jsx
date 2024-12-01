import { useContext, useState, createContext, Children } from "react";

export const ThemeContext = createContext();

/**
 * Provides the theme context to the entire application. The children
 * property should include all the components of the app, so that they
 * can access the theme.
 *
 * @param {Object} props - The props object
 * @param {Node} props.children - The children components
 */
export const ThemeContextProvider = ({children}) => { 
    const [theme, setTheme] = useState("light"); 

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}