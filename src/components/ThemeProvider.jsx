import { createContext, useContext, useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"

const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => null,
})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={theme === 'light' ? 'rounded-full text-black' : 'rounded-full'}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </Button>
  )
}