import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';


const GetNumber = (txt) => {
  let sum = ''
  for(let i = txt.length - 1; i >= 0; i--) {
    if(isNaN(txt[i])) {
      break;
    }
    sum = txt[i] + sum;
  }
  
  return Number(sum)
}

const GetTheList = (txt) => {
  const listof = txt.split('  added ');
  return listof;
}


const EachMemberAnalytics = ({}) => {
    const [EachExpenses, setEachExpenses] = useState([])
    const {id} = useParams();
    const dictionary_object = []
    const [email_user_expenses, setEmailUserExpenses] = useState()
    const location = useLocation()
    const data = location.state.data;
    const avg = location.state.avg;
    const members = location.state.data_members
    const email = localStorage.getItem('email')

    useEffect(()=>{
      for(let i = 0; i < members.length; i++) {
        dictionary_object[members[i]] = 0;
      }
      for(let i = 0; i < data.length; i++) {
        const getList = GetTheList(data[i])
        dictionary_object[getList[0]] = dictionary_object[getList[0]] + GetNumber(getList[1])
      }
      const temp = []
      for(let i = 0; i < members.length && EachExpenses.length === 0; i++) {
        if(email === members[i]) {
          setEmailUserExpenses(dictionary_object[members[i]]);
          continue;
        }
        temp.push(dictionary_object[members[i]])
      }
      if(temp.length > 0 && EachExpenses.length === 0) {
        setEachExpenses(temp)
      }
    }, [EachExpenses])



  return (
    <div className='Main_analytics_div'>
        <div className='Entire_Headerpart'>
            <div className="heading_analytocs">Hello {id}</div>
            <div className="entrire_part">
              <div className="left_part_div">
              <div className="analytics_main_page">
                <div>{email}</div>
                {
                  avg - email_user_expenses < 0 ? <div className="div_red">{(email_user_expenses-avg).toFixed(3)}</div> : <div className="div_green">{(avg-email_user_expenses).toFixed(3)}</div>
                }
              </div>
              </div>
              <div className="right_part_div">
              {
                members.filter(name=>name !== email).map((item,index)=>{
                  return <div className="analytics_main_page" key={index}>
                    <div>{item}</div>
                    {
                      avg - EachExpenses[index] < 0 ? <div className="div_red">{(EachExpenses[index]-avg).toFixed(3)}</div> : <div className="div_green">{(avg-EachExpenses[index]).toFixed(3)}</div>
                    }
                  </div>
                })
              }
              </div>
            </div>
        </div>
    </div>
  )
}

export default EachMemberAnalytics