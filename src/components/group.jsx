import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Group = () => {

    const {id} = useParams();

    const [userName, setUserName] = useState()
    const [addExpense, setAddExpense] = useState()

    useEffect(()=>{
        const GetGroupDetails = async() => {
            const token = localStorage.getItem('access_token')
            console.log(token)
            // const dt = await axios.post('http://127.0.0.1:8000/formgroup/', id, {
            //     headers: {
            //         Authorization: `Bearer ${token}`
            //     },      
            // })
        }
        GetGroupDetails()
    }, [])


    const AddingUser = async() => {
        console.log(userName)
        console.log("User Added")
        const token = localStorage.getItem('access_token')
        //username and groupname
        const dt = await axios.post('http://127.0.0.1:8000/addingusers/', {
            username : userName,
            groupname : id
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            },      
        })
    }

    return (
        <div className="each_group">
            <div>{id}</div>
            <div className="each_data_adding">
                <input type="text" onChange={(e)=>setAddExpense(e.target.value)} />
                <button>Add Expenses</button>
            </div>
            <div className="each_data_adding">
                <input type="text" onChange={(e)=>setUserName(e.target.value)} />
                <button onClick={AddingUser}>Add User</button>
            </div>
        </div>
    )
}

export default Group