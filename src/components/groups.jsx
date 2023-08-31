import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Groups = () => {
  const navigate = useNavigate()
  useEffect(()=> {
    if(localStorage.getItem('access_token') === null) {
      navigate('/login')
    }
    //console.log(isAuth)
  }, [])

  const [grpname, setGrapName] = useState()


  const SubmitGrp = async () => {
    const token = localStorage.getItem('access_token')
    console.log(token)
    console.log(grpname)
    await axios.post('http://127.0.0.1:8000/formgroup/', {
      grpname : grpname
    }, {
      headers: {
          Authorization: `Bearer ${token}`
      },      
  })
  }


  return (
    <>
    <div>Groups</div>
    <div className="add_group_div">
      <div className="add_group_btn">
        Add group 
      </div>
    </div>
    <div className="add_group_div">
      <div className="add_gorup_form">
        <div>
          <input type="text" name='group name' onChange={(e)=>setGrapName(e.target.value)} />
          <button onClick={SubmitGrp}>Create Group</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Groups