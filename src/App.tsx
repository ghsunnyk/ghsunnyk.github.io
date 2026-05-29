import { Moon, Sun } from 'lucide-react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { useTheme } from './providers/ThemeProvider'

function App() {
  const { theme, setTheme } = useTheme()

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <div className='fixed right-6 bottom-8 z-50 md:right-8'>
        <button
          onClick={handleToggleTheme}
          className='bg-accent hover:bg-primary/10 hover:text-primary hover:border-primary/50 flex size-12 cursor-pointer items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-md active:scale-90 active:rotate-90 md:size-14'
        >
          {theme === 'light' ? <Sun className='size-6' /> : <Moon className='size-6' />}
        </button>
      </div>
    </Router>
  )
}

export default App
