import React,{useState} from 'react'
import axios from 'axios';

const ChangePassword = () => {
  const [emailid, setEmailID] = useState(localStorage.getItem('email'))
  const [passwordchanged, setPassowordChanged] = useState('')

  const HandlePasswordChange = async() => {
    console.log(emailid);
    console.log(passwordchanged);
    const token = localStorage.getItem('access_token')

    await axios.post("https://sankard6305.pythonanywhere.com/changepassword/", {
        email : emailid,
        password: passwordchanged
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        },      
    }).then((data)=>console.log(data))
  }

  return (
    <div className='Showingmiddlepage'>
      <div className='HolePart'>
        <div className='JustCardPart'>
          <div className='PasswordChange'>
            <div className='MakeGap'>Change Password </div>
            <div className='MakeGap'><input type="text" value={emailid} placeholder='enter email address' /></div>
            <div className='MakeGap'><input type="text" value={passwordchanged} onChange={(e)=>setPassowordChanged(e.target.value)} placeholder='enter the password' /></div>
            <div className='MakeGap'><button onClick={HandlePasswordChange}>Submit</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword