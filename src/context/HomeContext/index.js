import { createContext, useState } from "react";

export const homeContext = createContext()

const HomeContextProvider = ({children}) => {
    const [statePostBox, setStatePostBox] = useState(false)
        
    function closePostBox() {
        setStatePostBox(false)
        console.log(statePostBox)
    }
    function openPostBox() {
        setStatePostBox(true)
    }
    const data = {
        statePostBox,
        closePostBox,
        openPostBox
    }
    return (
        <homeContext.Provider value={data}>
            {children}
        </homeContext.Provider>
    )
}

export default HomeContextProvider

