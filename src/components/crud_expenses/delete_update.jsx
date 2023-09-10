import React from 'react'
import './delet_update.css'

const Delete_update = ({ id }) => {

  const DeleteHandler = () => {
    console.log("delete")
    console.log(id)
  }

  const UpdateHandler = () => {
    console.log("update")
    console.log(id)
  }

  return (
    <div className='Delete_upadte_div'>
      <div className='Highlightdiv' onClick={DeleteHandler}><img src={require("../Images/delet_icon.png")} alt="Group_icon" /></div>
      <div className='Highlightdiv' onClick={UpdateHandler}><img src={require("../Images/edit_icon.png")} alt="Group_icon" /></div>
    </div>
  )
}

export default Delete_update