import { createContext, useState } from "react";

export const ThemeContext = createContext(null)

const ThemeContextProvider = ({children}) => {
    const [bgColor, setBgColor] = useState("white")
    console.log("bgColor: ", bgColor)

    return (
        <ThemeContext.Provider value={{ bgColor, setBgColor }}>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider