import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DarkModeProvider } from './themeService/DarkModeProvider'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Resources from './pages/Resources'
import Snippets from './pages/Snippets'
import Projects from './pages/Projects'

const App = () => {
  const appBgCss = 'bg-background text-text min-h-screen transition-colors duration-300';
  return (
    <DarkModeProvider>
      <div className={appBgCss}>
        <BrowserRouter>
          <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen justify-between'>
            <div>
              <NavBar />
              <main className="w-full">
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/blogs' element={<Blogs />} />
                  <Route path='/resources' element={<Resources />} />
                  <Route path='/snippets' element={<Snippets />} />
                  <Route path='/projects' element={<Projects />} />
                </Routes>
              </main>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </DarkModeProvider>
  )
}

export default App