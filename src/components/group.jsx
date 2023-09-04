import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Group = () => {

    const {id} = useParams();

    const [total, setTotal] = useState()

    const groups = []
    const [flag, setFlag] = useState(false)
    const [actualgrp, setActualgrp] = useState([])

    const groups_list = []
    const [actualgrplist, setActualgrpList] = useState([])

    const [userName, setUserName] = useState()
    const [addExpense, setAddExpense] = useState()
    const [actual_sum, setActualSum] = useState(0)
    const [group_numbers, setGroupNumbers] = useState(0)

    useEffect(()=>{
        const GetGroupDetails = async() => {
            const token = localStorage.getItem('access_token')
            console.log(token)
            const dt = await axios.post('http://127.0.0.1:8000/eachgrouplist/',{
                groupname : id
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                },      
            })

            let t = dt.data
            if(groups.length === 0){
                let normal_sum = 0
                for(let i = t.length-1; i>=0; i--){
                    groups.push(t[i])
                    let temp_count = "";
                    for(let j = t[i].length-1; j>= 0; j--) {
                        if(t[i][j] === ' ') {
                            break;
                        }
                        temp_count = t[i][j] +temp_count;
                    }
                    normal_sum += Number(temp_count)
                }

                console.log(normal_sum)
                setActualSum(normal_sum)
            }
            console.log(groups)
            setActualgrp(groups)
            setFlag(true)
        }
        const GetGroupMembers = async() => {
            const token = localStorage.getItem('access_token')
            console.log(token)
            const dt = await axios.post('http://127.0.0.1:8000/UsersList/',{
                groupname : id
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                },      
            })

            let t = dt.data
            if(groups_list.length === 0) {
                for(let i = t.length-1; i>=0; i--) groups_list.push(t[i])
                setGroupNumbers(t.length)
            }
            console.log(groups)
            setActualgrpList(groups_list)
            setFlag(true)

        }

        GetGroupDetails()
        GetGroupMembers()
    }, [flag])

    const AddingExpenses = async() => {
        console.log(addExpense)
        console.log("User Added")
        const token = localStorage.getItem('access_token')
        const email = localStorage.getItem('email')
        //username and groupname
        await axios.post('http://127.0.0.1:8000/addingexpenses/', {
            email : email,
            expense : addExpense,
            groupname : id
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            },      
        }).then(()=>{
            setAddExpense('')
            setFlag(false)
        })
    }

    const AddingUser = async() => {
        console.log(userName)
        console.log("User Added")
        const token = localStorage.getItem('access_token')
        //username and groupname
        await axios.post('http://127.0.0.1:8000/addingusers/', {
            username : userName,
            groupname : id
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            },      
        }).then(()=> {
            setUserName('')
            setFlag(false)
        })
    }

    return (
        <div className="each_group">
            <div>{id}</div>
            <hr />
            <div className="actual_total">
                <div>Total Expense {actual_sum}</div>
                {group_numbers}
                <div>Each Person Should be invest {actual_sum / group_numbers}</div>
            </div>
            <div className="each_data_adding">
                <input type="text" value={addExpense} onChange={(e)=>setAddExpense(e.target.value)} />
                <button onClick={AddingExpenses}>Add Expenses</button>
            </div>
            <div className="each_data_adding">
                <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} />
                <button onClick={AddingUser}>Add User</button>
            </div>
            <div className="showing_expenses">
            {
                actualgrp.map((grpname1)=>{
                return <div className="grpnames">{grpname1}</div>
                })
            }
            </div>
            <hr />
            <div className="showing_group_members">
            {
                actualgrplist.map((membername1)=>{
                return <div className="grpnames">{membername1}</div>
                })
            }
            </div>
        </div>
    )
}

export default Group