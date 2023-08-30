import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom"; 

const Notificationhs = () => {
    const navigate = useNavigate()
    useEffect(()=> {
    if(localStorage.getItem('access_token') === null) {
      navigate('/login')
    }
    //console.log(isAuth)
  }, [])
  return (
    <div>notificationhs</div>
  )
}

export default Notificationhs