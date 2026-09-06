import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import CV from './pages/CV'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'

function App() {
  // Home is built from 100vh scroll-snap panels, so the nav floats over it and
  // contact ships as the final panel instead of a page footer.
  const isHome = useLocation().pathname === '/'

  return (
    <div className="flex min-h-screen flex-col bg-base-950 font-sans text-ink-100">
      <ScrollToTop />
      <Nav transparent={isHome} />
      <main className={`flex-1 ${isHome ? '' : 'pt-16'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      {!isHome && <Footer />}
    </div>
  )
}

export default App
