import axios from 'axios'
import React from 'react'
import './delet_update.css'

const Delete_update = ({ setFlag, id, groupname, setIsExpanded, isExpanded }) => {

  const DeleteHandler = async() => {
    console.log("delete")
    console.log(id)
    const token = localStorage.getItem('access_token')
    await axios.post('http://127.0.0.1:8000/Updatedeletefunction/', {
      operationtype : 'delete',
      index_operation : id,
      grpname : groupname
    },{
      headers: {
          Authorization: `Bearer ${token}`
      },
  }).then(()=>{
    setIsExpanded(!isExpanded);
    setFlag(false)
  });
  }


  return (
    <div className='Delete_upadte_div'>
      <div className='Highlightdiv' onClick={DeleteHandler}><img src={require("../Images/delet_icon.png")} alt="Group_icon" /></div>
    </div>
  )
}

export default Delete_update