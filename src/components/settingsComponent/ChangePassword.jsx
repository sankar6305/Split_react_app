import React,{useState} from 'react'
import axios from 'axios';

const ChangePassword = () => {
  const [emailid, setEmailID] = useState(localStorage.getItem('email'))
  const [passwordchanged, setPassowordChanged] = useState('')

  const HandlePasswordChange = () => {
    console.log(emailid);
    console.log(passwordchanged);
  }

  return (
    <div className='Showingmiddlepage'>
      <div className='HolePart'>
        <div className='JustCardPart'>
          <div className='PasswordChange'>
            <div className='MakeGap'>Change Password </div>
            <div className='MakeGap'><input type="text" value={emailid} onChange={(e)=>setEmailID(e.target.value)} placeholder='enter email address' /></div>
            <div className='MakeGap'><input type="text" value={passwordchanged} onChange={(e)=>setPassowordChanged(e.target.value)} placeholder='enter the password to reset' /></div>
            <div className='MakeGap'><button onClick={HandlePasswordChange}>Submit</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword