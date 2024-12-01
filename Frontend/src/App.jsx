import React from 'react'
import Home from './home/Home'
import Course from './components/Course'
import { Navigate, Route, Routes} from "react-router-dom"
import Contect from './components/Contect'
import About from './components/About'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './components/context/AuthProvider'


function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
     
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/course" element={authUser ? <Course /> : <Navigate to="/signup" />} />
      <Route path='/contect' element={<Contect/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/Signup' element={<Signup/>} />
     </Routes>
     <Toaster />
    </>
  )
}

export default App