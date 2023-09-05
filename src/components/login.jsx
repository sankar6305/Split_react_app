import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"; 
import './login.css'

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginManager = async () => {
        
        const user = {
            username: email,
            password: password
        };
        const {data} = await axios.post('https://sankard6305.pythonanywhere.com/token/',
                user ,{headers: 
                     {'Content-Type': 'application/json'},
                withCredentials: true})
                .catch((e)=>{
                    alert(e);
                });
        localStorage.clear();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        localStorage.setItem('email', email);
        console.log(data);
        navigate('/')

    }


  return (
    <div className="login_page">
        <div className="login_component">
            <div className="login_title">
                <h1>Hi There </h1>
                <h3>Have we met before ? </h3>
            </div>
            <div className="login_form">
                <div className='login_spaces'>
                    <div className="Eachpartlogin">
                        <label htmlFor="loginemail"> Email </label>
                        <input type="email" name="email" id="loginemail" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="Eachpartlogin">
                        <label htmlFor="loginpassword"> Password</label>
                        <input type="password" name="password" id="loginpassword" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="Eachpartbtn">
                        <button type="submit" onClick={LoginManager}>Login</button>
                    </div>
                </div>
                <div className="register_link" onClick={(e)=>navigate('/register')} >
                Register
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login