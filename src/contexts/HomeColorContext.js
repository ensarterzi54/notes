import { createContext, useState } from "react"

const HomeColorContext = createContext(null)

const HomeColorContextProvider = ({ children }) => {
    const [color, setColor] = useState('light')

    return (
        <HomeColorContext.Provider value={color}>
            { children }
        </HomeColorContext.Provider>
    )
}

export default HomeColorContextProvider