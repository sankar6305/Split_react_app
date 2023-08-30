import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  useEffect(()=> {
    if(localStorage.getItem('access_token') === null) {
      navigate('/login')
    }
    //console.log(isAuth)
  }, [])
  return (
    <div className="HomePage">
      Home Page
    </div>
  )
}

export default Home