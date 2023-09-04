import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Groups = () => {
  const navigate = useNavigate()
  const groups = []
  const [flag, setFlag] = useState(false)
  const [actualgrp, setActualgrp] = useState([])
  useEffect( ()=> {

    if(localStorage.getItem('access_token') === null) {
      navigate('/login')
    }

    if(localStorage.getItem('access_token') !== null) {
      const fty = async() => {
        const token = localStorage.getItem('access_token')
        console.log(token)
        const email = localStorage.getItem('email')
        try {
          const dt = await axios.post('https://sankard6305.pythonanywhere.com/getthegroups/', {
            email : email
          },{
              headers: {
                  Authorization: `Bearer ${token}`
              },      
          })
          
          let t = dt.data
          if(groups.length === 0) for(let i = t.length-1; i>=0; i--) groups.push(t[i])
          console.log(groups)
          setActualgrp(groups)
          setFlag(true)
        }
        catch(err) {
          alert("Authenticate again")
          localStorage.clear();
          navigate('/login')
        }

      }

      fty();

    }

    //console.log(isAuth)
  }, [flag])

  const [grpname, setGrapName] = useState()


  const SubmitGrp = async () => {
    const token = localStorage.getItem('access_token')
    const email = localStorage.getItem('email')
    console.log(token)
    console.log(grpname)
    await axios.post('https://sankard6305.pythonanywhere.com/formgroup/', {
      grpname : grpname,
      email : email
    }, {
      headers: {
          Authorization: `Bearer ${token}`
      },      
  }).then(()=> setFlag(false))
  }


  return (
    <div>
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
    <div className="showing-groups">
      {
        actualgrp.map((grpname1)=>{
          return <div className="grpnames" onClick={()=>navigate(`/groups/${grpname1}`)}>{grpname1}</div>
        })
      }
    </div>
    </div>
  )
}

export default Groups
