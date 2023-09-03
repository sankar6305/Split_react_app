import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Group = () => {

    const {id} = useParams();

    const groups = []
    const [flag, setFlag] = useState(false)
    const [actualgrp, setActualgrp] = useState([])

    const groups_list = []
    const [actualgrplist, setActualgrpList] = useState([])

    const [userName, setUserName] = useState()
    const [addExpense, setAddExpense] = useState()

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
            if(groups.length === 0) for(let i = t.length-1; i>=0; i--) groups.push(t[i])
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
            if(groups_list.length === 0) for(let i = t.length-1; i>=0; i--) groups_list.push(t[i])
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
            <div className="each_data_adding">
                <input type="text" onChange={(e)=>setAddExpense(e.target.value)} />
                <button onClick={AddingExpenses}>Add Expenses</button>
            </div>
            <div className="each_data_adding">
                <input type="text" onChange={(e)=>setUserName(e.target.value)} />
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