import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Topic from './pages/Topic'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topic/:topicId" element={<Topic/>} />
    </Routes>
  )
}

export default App
