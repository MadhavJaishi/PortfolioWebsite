import { createContext, useState } from 'react'

const DarkModeContext = createContext();
const DarkModeProvider = (props) => {
  const [darkMode, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const toggleTheme = () => {
    setDark(prev => !prev);
  }
  return (
    <div>
        <DarkModeContext.Provider value={{darkMode, toggleTheme}}>
            {props.children}
        </DarkModeContext.Provider>
    </div>
  )
}

export {DarkModeContext, DarkModeProvider}