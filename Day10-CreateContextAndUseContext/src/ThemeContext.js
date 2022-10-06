import { useState, createContext } from "react"

const ThemeContext = createContext()

function ThemeProvider ({children}) { 

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        console.log('toggleTheme');
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    const value = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
 }

 export {ThemeContext, ThemeProvider}