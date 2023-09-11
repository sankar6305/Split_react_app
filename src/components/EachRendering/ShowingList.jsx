import React, { useState } from 'react'
import Delete_update from '../crud_expenses/delete_update'

const ShowingList = ({ setFlag, index, group_name, userName, username, message }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const backendUrl = process.env.REACT_BACKEND_URL;

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
  return (
    <div className='EntireOperations' key={ index }>
        <div className="grpexpenses">
            <div className="div_expenses">
                <div>{userName}</div>
                <div>{backendUrl}</div>
                <div className="username_div">{username}</div>
                <div className="usermessagediv">{message}</div>
              </div>
              <div className='delete_update_imgs'>
                <div className='Delete_id_up'>{isExpanded && (<Delete_update setFlag={setFlag} id={ index } groupname={group_name} setIsExpanded={setIsExpanded} isExpanded={isExpanded}  />) }</div>
                <div className="delete_or_update" onClick={handleToggleExpand} >
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                </div>
            </div>
        </div>
                            
    </div>
  )
}

export default ShowingList
