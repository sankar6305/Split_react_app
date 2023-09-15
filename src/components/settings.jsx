import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom"; 
import ChangePassword from './settingsComponent/ChangePassword';
import ChangeUsername from './settingsComponent/ChangeUsername';

const Settings = () => {
    const navigate = useNavigate()
    useEffect(()=> {
      if(localStorage.getItem('access_token') === null) {
        navigate('/login')
      }
    }, [])
  return (
    <div>
      <div className='Heading_of_groups'>settings</div>
      <ChangeUsername />
      <ChangePassword />
    </div>
  )
}

export default Settings