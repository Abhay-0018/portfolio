import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import { Toaster } from './components/ui/toaster'

const App = () => {
  return (
    <>
    <Toaster/>
      <BrowserRouter>
      <Routes>


    {/* Using the index is for the default value for this and the path is for the not valide value  */}
      <Route index element={<Home/>}/> 
      <Route path='*' element={<NotFound/>} /> 


      </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
