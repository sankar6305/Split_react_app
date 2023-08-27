import React,{useState, useEffect} from 'react'
//creating routes
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home'
import Groups from './components/groups'
import Header from './components/Header'
import Login from './components/login'
import Register from './components/register'
import './App.css'

const App = () => {

  const [isAuth, setIsAuth] = useState(false)

  useEffect(()=> {
    if(localStorage.getItem('access_token') !== null) {
      setIsAuth(true)
    }
  }, [isAuth])


  return (
    <BrowserRouter>
    <Header />
    <div className='Component'>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/groups' element={<Groups />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App