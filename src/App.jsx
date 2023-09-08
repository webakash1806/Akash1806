import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Project from './Components/Project'
import Skills from './Components/Skills'

const App = () => {
  return (
    <Routes>
      <Route path='/Akash1806' element={<Home />} />
      <Route path='/Akash1806/about' element={<About />} />
      <Route path='/Akash1806/Contact' element={<Contact />} />
      <Route path='/Akash1806/Project' element={<Project />} />
      <Route path='/Akash1806/Skills' element={<Skills />} />
    </Routes>
  )
}

export default App
