import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const ShowingGroups = ({grpname}) => {
    const navigate = useNavigate()
    const DeleteHandler = async() => {
        console.log("delete")
        const email = localStorage.getItem('email')
        const token = localStorage.getItem('access_token')
        await axios.post('http://127.0.0.1:8000/UpdatedeleteGroup/', {
            typeofoperation : 'delete',
            groupname : grpname,
            email : email
        },{
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    }
  return (
    <div className="grpnamesparent">
        <div className="grpnames" onClick={()=>navigate(`/groups/${grpname}`)}>{grpname} </div>
        <div className='Delete_upadte_div'>
            <div className='GroupsHighligh' onClick={DeleteHandler}><img src={require("../Images/delet_icon.png")} alt="Group_icon" /></div>
        </div>
        
    </div>
  )
}

export default ShowingGroups