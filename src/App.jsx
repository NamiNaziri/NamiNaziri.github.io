import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import CV from './pages/CV'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-base-950 font-sans text-ink-100">
      <ScrollToTop />
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
