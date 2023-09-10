import React from 'react'

const ShowingEmail = ({ index, membername1}) => {
  return (
    <div>
      <div className="grpexpenses grpexpenses1" key={index}>{membername1}</div>
    </div>
  )
}

export default ShowingEmail
