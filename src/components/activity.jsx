import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom"; 
import axios from 'axios';



const Activity = () => {

  const navigate = useNavigate()
  const [activity, setActivity] = useState([])
  const actualdeleted = []
  useEffect(()=> {
    if(localStorage.getItem('access_token') === null) {
      navigate('/login')
    }
    const GwtTheDeletedList = async() => {
      const email = localStorage.getItem('email')
      const token = localStorage.getItem('access_token')
      
      await axios.post("https://sankard6305.pythonanywhere.com/gettheDeletedgroups/", {
        email : email
      }, {
          headers: {
              Authorization: `Bearer ${token}`
          },      
      }).then((data)=>{
        if(actualdeleted.length === 0) {
          for(let i = 0; i < data.data.length; i++) {
            actualdeleted.push(data.data[i])
          }
        }
        if(activity.length === 0) { setActivity(actualdeleted) }

      })
      
    }
    GwtTheDeletedList()
    
  }, [])
  return (
    <div>
      <div className='Heading_of_groups'>Activity</div>
      {activity.map((item, index)=> {
        return <div key={index} >
          <div className='grpnames strikethrough'>{item}</div>
        </div>
      })}
    </div>
  )
}

export default Activity