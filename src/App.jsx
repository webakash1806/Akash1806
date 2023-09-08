import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Project from './Components/Project'
import Skills from './Components/Skills'
import NoPage from './Components/NoPage'

const App = () => {
  return (
    <Routes>
      <Route path='/Akash1806' element={<Home />} />
      <Route path='/Akash1806/about' element={<About />} />
      <Route path='/Akash1806/contact' element={<Contact />} />
      <Route path='/Akash1806/project' element={<Project />} />
      <Route path='/Akash1806/skills' element={<Skills />} />
      <Route path='*' element={<NoPage />} />
    </Routes>
  )
}

export default App
