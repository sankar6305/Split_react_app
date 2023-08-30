import React,{useEffect} from 'react'
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
            <div className="Header-main-component" onClick={(e) => navigate('/')}>
                Home
            </div>
            <div className="Header-main-component" onClick={(e) => navigate('/groups')}>
                Groups
            </div>
            <div className="Header-main-component" onClick={(e) => navigate('/activity')}>
                Activity
            </div>
            <div className="Header-main-component" onClick={(e) => navigate('/notifications')}>
                Notifications
            </div>
            <div className="Header-main-component" onClick={(e) => navigate('/settings')}>
                Settings 
            </div>
        </div>
        <div className="login_logout_buttons">
            <div className="login" onClick={(e)=>navigate('/login')} >
                Login
            </div>
        </div>
        <div className="login_logout_buttons">
            <div className="login" onClick={(e)=>navigate('/register')} >
                Register
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header