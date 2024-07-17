import './App.css'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Experience from './pages/Experience/Experience'
import {Routes, Route} from 'react-router-dom'
import NoMatch from './pages/NoMatch/NoMatch'
import Blog from './pages/Blog/Blog'
import Post from './pages/Post/Post'
import CreatePost from './pages/CreatePost/CreatePost'
import EditPost from './pages/EditPost/EditPost'
// import About from './pages/About/About'


function App() {

  return (
    <>
      <div id="app">


        <Nav/>
        <Routes>
          {/* will go to the nav element */}


            <Route index element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/projects' element={<Projects/>} />

            {/* will be done later */}
            <Route path='/projects/:id' element={<Projects/>} />
            <Route path='/experience' element={<Experience/>} />

            {/* paths for blog resources */}
            <Route path='/blog' element={<Blog/>} />
            <Route path='/blogs/create' element={<CreatePost/>} />
            <Route path='/blogs/edit' element={<EditPost/>} />
            <Route path='/blogs/:id' element={<Post id={5}/>} />

            {/* Handling unknown paths */}
            <Route path="*" element={<NoMatch />} />
        </Routes>



        
        <Footer />
      </div>
    </>
  )
}

export default App










// TEMPLATE //

/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      
    </>
  )
}
*/