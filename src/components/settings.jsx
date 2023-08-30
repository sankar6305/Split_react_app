import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom"; 

const Settings = () => {
    const navigate = useNavigate()
    useEffect(()=> {
    if(localStorage.getItem('access_token') === null) {
      navigate('/login')
    }
    //console.log(isAuth)
  }, [])
  return (
    <div>settings</div>
  )
}

export default Settings