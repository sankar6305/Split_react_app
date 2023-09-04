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
            <div className="Header-main-component" onClick={(e) => navigate('/groups')}>
                <div className="groups_img_div"> <img src={require("./Images/groups_image.png")} alt="Group_icon" /> </div>
                Groups
            </div>
            <div className="Header-main-component" onClick={(e) => navigate('/activity')}>
            <div className="groups_img_div"> <img src={require("./Images/activity.png")} alt="Group_icon" /> </div>
                Activity
            </div>
            <div className="Header-main-component" onClick={(e) => navigate('/settings')}>
            <div className="groups_img_div"> <img src={require("./Images/settings.png")} alt="Group_icon" /> </div>
                Settings 
            </div>
        </div>
        <div className="login_logout_buttons">
        <div className="groups_img_div"> <img src={require("./Images/login.png")} alt="Group_icon" /> </div>
            <div className="login" onClick={(e)=>navigate('/login')} >
            
                Login
            </div>
        </div>
        <div className="login_logout_buttons">
        <div className="groups_img_div"> <img src={require("./Images/regester.png")} alt="Group_icon" /> </div>
            <div className="login" onClick={(e)=>navigate('/register')} >
            
                Register
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header