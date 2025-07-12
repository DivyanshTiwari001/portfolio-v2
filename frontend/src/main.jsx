import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {About,Achievement,Blog,Contact,Project} from './Pages'
import { HashRouter,Routes,Route } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<About />} />
          <Route path="projects" element={<Project />} />
          <Route path="achievements" element={<Achievement />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="contact-me" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
)
