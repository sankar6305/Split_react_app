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
            const dt = await axios.post('https://sankard6305.pythonanywhere.com/eachgrouplist/',{
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
                        if(isNaN(t[i][j])) {
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
            const dt = await axios.post('https://sankard6305.pythonanywhere.com/UsersList/',{
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
        if (addExpense === '') {
            alert("Please Enter the Expense")
        } else {
            console.log("User Added")
            const token = localStorage.getItem('access_token')
            const email = localStorage.getItem('email')
            //username and groupname
            await axios.post('https://sankard6305.pythonanywhere.com/addingexpenses/', {
                email: email,
                expense: addExpense,
                groupname: id
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }).then(() => {
                setAddExpense('')
                setFlag(false)
            })
        }
    }

    const AddingUser = async() => {
        console.log(userName)
        if (userName === '') {
            alert("Please Enter the User Name")
        } else {
            console.log("User Added")
            const token = localStorage.getItem('access_token')
            //username and groupname
            await axios.post('https://sankard6305.pythonanywhere.com/addingusers/', {
                username: userName,
                groupname: id
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }).then(() => {
                setUserName('')
                setFlag(false)
            })
        }
    }

    return (
        <div className="each_group">
            <div className="expenses_div">
            <h1>{id}</h1>
            <hr />
            <div className="actual_total">
                <div>Total Expense {actual_sum}</div>
                <div>Each Person Should be invest {actual_sum / group_numbers}</div>
            </div>
                <div className="each_data_adding">
                    <div className="add-expense-input">
                        <input type="text" value={addExpense} onChange={(e) => setAddExpense(e.target.value)} required />
                    </div>
                    <div className="add-expense-btn">
                        <button onClick={AddingExpenses}>Add Expenses</button>
                    </div>
            </div>
            
            <div className="showing_expenses">
            {
                actualgrp.map((grpname1)=>{
                return <div className="grpexpenses">{grpname1}</div>
                })
            }
            </div>
            </div>
            <div className="user_names">
            <div className="showing_group_members">
                    <h2>Group Members</h2>
                    <div className="each_data_adding">
                        <div className="add-user-input">
                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                        </div>
                        <div className="add-user-btn">
                            <button onClick={AddingUser}>Add User</button>
                        </div>
                    </div>
            {
                actualgrplist.map((membername1)=>{
                return <div className="grpmembersnames">{membername1}</div>
                })
            }
            </div>
            </div>
        </div>
    )
}

export default Group