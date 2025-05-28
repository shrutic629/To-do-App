import React from 'react'
import Signup from './components/Signup'
import ConfirmOtp from './components/ConfirmOtp'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import ConfirmPassword from './components/ConfirmPassword'
import { Routes,Route } from 'react-router-dom'
import HeaderSidebar from './components/HeaderSidebar'
import UpcomingTask from './components/UpcomingTask'

const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/confirm-otp' element={<ConfirmOtp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/confirm-password' element={<ConfirmPassword/>}/> 
      <Route path='/header-sidebar' element={<HeaderSidebar/>}/> 
      <Route path='/home' element={<UpcomingTask/>}/>
    </Routes>
    </div>
  )
}

export default App