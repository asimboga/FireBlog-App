import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from '../components/Navbar'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import Details from "../pages/Details" 
import Login from "../pages/Login"
import NewBlog from '../pages/NewBlog'
import Profile from '../pages/Profile'
import Register from "../pages/Register"
import UpdateBlog from '../pages/UpdateBlog'



const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/about/:id' element={<About/>}/>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/newblog/:id' element={<NewBlog/>}/>
          <Route path='/profile/:id' element={<Profile/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/updateblog/:id' element={<UpdateBlog/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;