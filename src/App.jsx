import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListPosts from './components/ListPosts'
import GetPost from './components/GetPost'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'

function App() {
  return (
 
  <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
       
        <Route path="/list" element={<ListPosts />} />
        <Route path="/post/:id" element={<GetPost />} />
      </Routes>
    </Router>
  )
}

export default App
