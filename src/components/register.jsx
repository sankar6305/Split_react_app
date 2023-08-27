import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginManager = async () => {
        const data = { name: name, email : email, password : password }
        console.log(data);
        await axios.post('http://127.0.0.1:8000/', {
            data : data
        }).then((data)=>console.log(data)).catch((error) => {
            console.log(error)
        })

    }


  return (
    <div className="login_page">
        <div className="login_component">
            <div className="login_title">
                <h1>Hi There </h1>
                <h3>Is this is our first interaction </h3>
            </div>
            <div className="login_form">
                
                    <div className="Eachpartlogin">
                        <label htmlFor="loginname"> Name </label>
                        <input type="text" name="name" id="loginname" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="Eachpartlogin">
                        <label htmlFor="loginemail"> Email </label>
                        <input type="email" name="email" id="loginemail" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="Eachpartlogin">
                        <label htmlFor="loginpassword"> Password</label>
                        <input type="password" name="password" id="loginpassword" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="Eachpartbtn">
                        <button type="submit" onClick={LoginManager}>Register</button>
                    </div>
                    <div className="login_button" onClick={(e)=>navigate('/login')} >
                        Login
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Register