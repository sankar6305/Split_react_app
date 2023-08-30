import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom"; 

const Activity = () => {
    const navigate = useNavigate()
    useEffect(()=> {
    if(localStorage.getItem('access_token') === null) {
      navigate('/login')
    }
    //console.log(isAuth)
  }, [])
  return (
    <div>activity</div>
  )
}

export default Activity