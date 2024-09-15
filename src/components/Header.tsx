import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    updateTheme(isDarkMode)
  }, [])

  const updateTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    updateTheme(newDarkMode)
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode))
  }

  return (
    <header className='flex justify-center items-center p-4 bg-skin-fill text-skin-base transition-colors duration-200'>
      <div className='w-[800px] max-w-4xl flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Where in the world?</h1>
        <button
          onClick={toggleDarkMode}
          className='p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500 transition-colors duration-200'
          aria-label={
            darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
          }
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </header>
  )
}

export default Header
