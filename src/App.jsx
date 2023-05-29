import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Projects from './components/Projects'


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='/projects/:brandId' element={<Projects/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App