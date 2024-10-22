'use client';

import { ThemeContextProvider } from '../context/themeContext/ThemeContextProvider';

export default function ThemeProvider({children}) {
  return (
    <ThemeContextProvider>
      {children}
    </ThemeContextProvider>
  )
}