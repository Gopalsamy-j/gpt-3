import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'

import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './containers/home/Home.jsx'
import Whatisgpt from './containers/whatisgpt/WhatisGpt.jsx'
import Openai from './containers/openai/Openai.jsx'
import Case from './containers/case/Case.jsx'
import Library from './containers/library/Library.jsx'

const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>} />
    <Route path='/whatisgpt' element={<Whatisgpt/>}/>
    <Route path='/openai' element={<Openai/>} />
    <Route path='/casestudies' element={<Case/>} />
    <Route path='/library' element={<Library/>} />
  </Route>
)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
