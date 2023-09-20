import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import MainHome from '../components/HomepageComonents/MainHome'

const Home = () => {
  const navigate = useNavigate()

  
  useEffect(()=> {
    if(localStorage.getItem('access_token') === null) {
      navigate('/login')
    }
  }, [])
  return (
    <div className="HomePage">
      <MainHome />
    </div>
  )
}

export default Home