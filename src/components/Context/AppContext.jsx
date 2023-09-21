import React, { createContext, useState } from 'react'

const CFContext = createContext()

const CFProvider = ({ children }) => {

    const [drawer, setDrawer] = useState(false)

    return (
        <CFContext.Provider value={{
            drawer,
            setDrawer
        }} >
            {children}
        </CFContext.Provider>
    )
}

export { CFProvider, CFContext }