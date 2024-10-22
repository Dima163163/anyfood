'use client';
import { useCallback, useState } from 'react'
import { ThemeContext } from './ThemeContext';

export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      if (currentTheme === "dark") {
        return "light"
      } else {
        return "dark"
      }
    })
  }, []);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}