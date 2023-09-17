import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom"; 


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
      <div className='grpnames' onClick={()=>navigate('/settings/changeUserName')}>ChangeUsername</div>
      <div className='grpnames' onClick={()=>navigate('/settings/changeuserpassword')}>ChangePassword</div>
    </div>
  )
}

export default Settings