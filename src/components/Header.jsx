import React from 'react'
import { useNavigate } from "react-router-dom"; 
import './Header.css'

const Header = () => {

    const navigate = useNavigate()

  return (
    <div className='Header_main'>
        
            <div className="Header-main-nav">
                <div className="Logo" onClick={(e) => navigate('/')}>
                <div className="groups_logo"> <img src={require("./Images/logo_by_me.PNG")} alt="Group_icon" /> </div>
                <div className="login" >SplitUp</div>
                </div>
            <div className="Header-main-nav-components">
                <div className="Header-main-component" onClick={(e) => navigate('/groups')}>
                <div className="groups_img_div"> <img src={require("./Images/groups_image.png")} alt="Group_icon" /> </div>
                <div className="login">Groups</div>
                </div>
                <div className="Header-main-component" onClick={(e) => navigate('/activity')}>
                <div className="groups_img_div"> <img src={require("./Images/activity.png")} alt="Group_icon" /> </div>
                <div className="login">Activity</div>
                </div>
                <div className="Header-main-component" onClick={(e) => navigate('/settings')}>
                <div className="groups_img_div"> <img src={require("./Images/settings.png")} alt="Group_icon" /> </div>
                <div className="login" >Settings </div>
                </div>
                <div className="Header-main-component" onClick={(e)=>navigate('/login')}>
                <div className="groups_img_div"> <img src={require("./Images/login.png")} alt="Group_icon" /> </div>
                    <div className="login" >Login</div>
                </div>
                <div className="Header-main-component" onClick={(e)=>navigate('/register')} >
                <div className="groups_img_div"> <img src={require("./Images/regester.png")} alt="Group_icon" /> </div>
                    <div className="login" >Register</div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Header