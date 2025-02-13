import React,{createContext, useContext} from 'react'

export const ThemeContext = createContext(
    {
        themeMode : "Light",
        lightTheme: () => {},
        darkTheme: () => {},
    }
);

export const ThemeProvider = ThemeContext.Provider

export const UseTheme = () => {
    return(
        useContext(ThemeContext)
    )
}