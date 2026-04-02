import { HashRouter, Route, Routes } from "react-router-dom"
import { DarkModeProvider } from './themeService/DarkModeProvider'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Resources from './pages/Resources'
import Snippets from './pages/Snippets'
import Projects from './pages/Projects'

const App = () => {
  const appBgCss = 'bg-background text-text min-h-screen scroll-hidden';
  return (
    <DarkModeProvider>
      <div className={appBgCss}>
        <div className='sm:mx-[25%]'>
          <HashRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/resources' element={<Resources />} />
              <Route path='/snippets' element={<Snippets />} />
              <Route path='/projects' element={<Projects />} />
            </Routes>
          </HashRouter>
        </div>
      </div>
    </DarkModeProvider>
  )
}

export default App