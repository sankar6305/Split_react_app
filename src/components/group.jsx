import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Group = () => {
    const navigate = useNavigate()
    const {id} = useParams();

    const groups = []
    const [flag, setFlag] = useState(false)
    const [actualgrp, setActualgrp] = useState([])

    const groups_list = []
    const [actualgrplist, setActualgrpList] = useState([])

    const [userName, setUserName] = useState()
    const [addExpense, setAddExpense] = useState()
    const [actual_sum, setActualSum] = useState(0)
    const [group_numbers, setGroupNumbers] = useState(0)
    const [user_name, setUser_Name] = useState("")
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        setUser_Name(localStorage.getItem('email'))
        console.log("er")
        console.log(user_name)
        console.log("wef,m wrf")
        const GetGroupDetails = async() => {
            const token = localStorage.getItem('access_token')
            const email = localStorage.getItem('email')
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
                let vtr = 0;
                for(let i = t.length-1; i>=0; i--){
                    groups.push(t[i])
                    const yt = FunctofName(t[i])
                    let temp_count = "";
                    for(let j = t[i].length-1; j>= 0; j--) {
                        if(isNaN(t[i][j])) {
                            break;
                        }
                        temp_count = t[i][j] +temp_count;
                    }
                    if(yt[0] === email) {
                        vtr += Number(temp_count)
                    }
                    normal_sum += Number(temp_count)
                }
                setTotal(vtr)
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
    }, [flag, user_name])

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

    const FunctofName = (expenses) => {
        const listofname = expenses.split('  added ')
        return listofname;
    }

    const FunctionForTesting = () => {
        const rty = total - (actual_sum / group_numbers)
        if(rty > 0){
            return <div className='RedDiv RedGreenDiv'>{rty}</div>
        }
        return <div className="GreenDiv RedGreenDiv">{-1*rty}</div>
    }

    return (
        <div className="each_group">
            <div className="expenses_div">
            <h1>{id}</h1>
            <div className="actual_total">
                <div>Total Expense {actual_sum}</div>
                <div>Each Person Should be invest {actual_sum / group_numbers}</div>
            </div>
                <div className="each_data_adding">
                    <div className="add-group-input">
                        <input type="text" value={addExpense} onChange={(e) => setAddExpense(e.target.value)} required />
                    </div>
                    <div className="add-group-btn">
                        <button onClick={AddingExpenses}>Add Expenses</button>
                    </div>
            </div>
            
            <div className="showing_expenses">
            {
                actualgrp.map((grpname1)=>{
                    const lsitofnames = FunctofName(grpname1);
                    let username = lsitofnames[0]
                    const message = lsitofnames[1]
                    if(username === user_name) {
                        username = "You"
                    }
                return <div className='EntireOperations'>
                            <div className="grpexpenses">
                                <div className="div_expenses">
                                    <div>{userName}</div>
                                    <div className="username_div">{username}</div>
                                    <div className="usermessagediv">{message}</div>
                                </div>
                                <div className="delete_or_update">
                                    <div>.</div>
                                    <div>.</div>
                                    <div>.</div>
                                </div>
                            </div>
                            
                        </div>
                })
            }
            </div>
            </div>
            <div className="user_names">
            <div className="showing_group_members">
                    <h2>Group Members </h2>
                    <h6 onClick={(e)=>navigate(`/${id}/analyse`)}><u> anlyse the current group payments</u></h6>
                    {FunctionForTesting()}
                    
                    <div className="each_data_adding">
                        <div className="add-group-input">
                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                        </div>
                        <div className="add-group-btn">
                            <button onClick={AddingUser}>Add User</button>
                        </div>
                    </div>
            {
                actualgrplist.map((membername1)=>{
                return <div className="grpexpenses grpexpenses1">
                    {membername1}
                    </div>
                })
            }
            </div>
            </div>
        </div>
    )
}

export default Group