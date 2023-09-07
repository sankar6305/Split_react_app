import React from 'react'
import { useParams } from 'react-router-dom';


const EachMemberAnalytics = ({eachList}) => {
    const {id} = useParams();
  return (
    <div>
        <div>
            Hello {id}
        </div>
    </div>
  )
}

export default EachMemberAnalytics