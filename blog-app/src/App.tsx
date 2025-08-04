import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import '@radix-ui/themes/styles.css';
import './App.css'

import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import { Loading } from './pages/Loading/Loading';


const Home = lazy(() => import('./pages/Home/Home'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Experience = lazy(() => import('./pages/Experience/Experience'));
const NoMatch = lazy(() => import('./pages/NoMatch/NoMatch'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
const Post = lazy(() => import('./pages/Post/Post'));
const CreatePost = lazy(() => import('./pages/CreatePost/CreatePost'));
const EditPost = lazy(() => import('./pages/EditPost/EditPost'));
const Project = lazy(() => import('./pages/Project/Project'));
const Admin = lazy(() => import('./pages/Admin/Admin'));





function App() {

  return (
    <>
      <div id="app">


        <Nav />
        <Suspense fallback={
          <Loading />
        }>
          <Routes>
            {/* will go to the nav element */}


            <Route index element={<Home />} />

            {/* TODO: will be done later */}
            <Route path='/admin' element={<Admin />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:id' element={<Project />} />




            <Route path='/experience' element={<Experience />} />

            {/* paths for blog resources */}
            <Route path='/blog' element={<Blog />} />
            <Route path='/posts/create' element={<CreatePost />} />
            <Route path='/posts/:id/edit' element={<EditPost />} />
            <Route path='/posts/:id' element={<Post />} />

            {/* Handling unknown paths */}
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Suspense>



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