import { createContext, useState } from 'react'
export const Theme = createContext();
function ThemeProvider({children}) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () =>{
    setIsDarkMode((prev) => !prev);
  };
  return (
    <Theme.Provider value={{ isDarkMode, toggleTheme }}>
        {children}
    </Theme.Provider>
  )
}

export default ThemeProvider
