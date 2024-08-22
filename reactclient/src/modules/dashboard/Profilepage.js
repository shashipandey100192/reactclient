import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { backendurl } from '../../Servicepage'



function Profilepage() {
    const [sdata,setdatas]=useState([])
    const {id}= useParams()

    const singleuser = () => {
        axios.get(`${backendurl}/singledata/${id}`).then((d) => {
            console.log(d.data);
            setdatas(d.data);
        })
    }
    useEffect(() => {
        singleuser();
    }, []);


  return (
    <div className='container-fluid border'>
        <div className='row'>
            <div className='col-md-10'>
                <p className='h2'>Full Name: {sdata.fullname}</p>
                <hr/>
                <p className='h4'>Email: {sdata.email}</p> 
                <p className='h4'>Phone No: {sdata.phone}</p>
            </div>
            <div className='col-md-2'>
                <img src={sdata.profile}  alt={sdata._id} width={180} height={200}/>
            </div>
        </div>
        


    </div>
  )
}

export default Profilepage