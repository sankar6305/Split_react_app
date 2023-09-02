import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Group = () => {

    const {id} = useParams();

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


    console.log(id)
    return (
        <div className="each_group">
            <div>{id}</div>
            <div className="each_data_adding">
                <input type="text" />
                <button>Add Expenses</button>
            </div>
        </div>
    )
}

export default Group