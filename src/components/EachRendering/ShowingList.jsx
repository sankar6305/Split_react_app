import React, { useState } from 'react'
import Delete_update from '../crud_expenses/delete_update'

const ShowingList = ({ index, userName, username, message }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
  return (
    <div className='EntireOperations' key={ index }>
        <div className="grpexpenses">
            <div className="div_expenses">
                <div>{userName}</div>
                <div className="username_div">{username}</div>
                <div className="usermessagediv">{message}</div>
              </div>
              <div className='delete_update_imgs'>
                <div className='Delete_id_up'>{isExpanded && (<Delete_update id={ index }  />) }</div>
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
