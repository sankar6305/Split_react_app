import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';


const GetNumber = (txt) => {
  let sum = ''
  for(let i = txt.length - 1; i >= 0; i--) {
    if(isNaN(txt[i])) {
      break;
    }
    sum += txt[i];
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
    const location = useLocation()
    const data = location.state.data;
    const avg = location.state.avg;
    const members = location.state.data_members

    useEffect(()=>{
      for(let i = 0; i < members.length; i++) {
        dictionary_object[members[i]] = 0;
      }
      for(let i = 0; i < data.length; i++) {
        const getList = GetTheList(data[i])
        dictionary_object[getList[0]] += GetNumber(getList[1])
      }
      const temp = []
      for(let i = 0; i < members.length && EachExpenses.length === 0; i++) {
        temp.push(dictionary_object[members[i]])
      }
      if(temp.length > 0 && EachExpenses.length === 0) {
        setEachExpenses(temp)
      }
    }, [EachExpenses])



  return (
    <div>
        <div>
            Hello {id}
            {
              members.map((item,index)=>{
                return <div className="div_Expense">{item} money {EachExpenses[index]}</div>
              })
            }
        </div>
    </div>
  )
}

export default EachMemberAnalytics