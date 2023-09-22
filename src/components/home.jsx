import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import MainHome from '../components/HomepageComonents/MainHome'

const Home = () => {
  const navigate = useNavigate()

  

  return (
    <div className="HomePage">
      <MainHome />
    </div>
  )
}

export default Home