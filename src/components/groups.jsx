import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Groups = () => {
  const navigate = useNavigate()
  useEffect(()=> {
    if(localStorage.getItem('access_token') === null) {
      navigate('/login')
    }
    //console.log(isAuth)
  }, [])

  return (
    <div>Groups</div>
  )
}

export default Groups