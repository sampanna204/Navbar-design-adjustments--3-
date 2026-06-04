import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { CategoryPage } from './pages/CategoryPage';
import { About } from './pages/About';
import { Blog } from './pages/Blog';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FAF8F5]">
        <Navbar />
        <Routes>
          {/* Changed this back to Home so your main landing page loads */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}