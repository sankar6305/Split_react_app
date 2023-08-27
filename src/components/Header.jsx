import React from 'react'
import { useNavigate } from "react-router-dom"; 

const Header = () => {

    const navigate = useNavigate()

    
  return (
    <div className='Header_main'>
        <div className="Header-main-nav">
            <div className="Logo" onClick={(e) => navigate('/')}>
                SplitUp
            </div>
        <div className="Header-main-nav-components">
            <div className="Header-main-component">
                DashBoard
            </div>
            <div className="Header-main-component">
                Groups
            </div>
            <div className="Header-main-component">
                Activity
            </div>
            <div className="Header-main-component">
                Notifications
            </div>
        </div>
        <div className="login_logout_buttons">
            <div className="login" onClick={(e)=>navigate('/login')} >
                Login 
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header