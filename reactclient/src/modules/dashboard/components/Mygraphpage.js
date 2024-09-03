import React,{useEffect, useState} from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import axios from 'axios';
import { backendurl } from '../../../Servicepage';



const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


function Mygraphpage() {
    const[mydata,setdata]=useState([])

    const myalldata = () => {
        axios.get(`${backendurl}/allusers`).then((d) => {
            console.log(d.data);
            setdata(d.data)
          
        })
    }
    useEffect(() => {
        myalldata();
    }, []);



    return (

        <div className='container'>
           
            <div className='row'>
                <div className='col-md-12'>
                    {/* <h1>{mydata.gender.length}</h1> */}
                    <section className='bg-dark'>
                    <BarChart
                        width={1000}
                        height={300}
                        data={mydata}>
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="fullname" />
                        {/* <YAxis /> */}
                        <Tooltip shared={true} trigger="mouseover" />
                        {/* <Legend /> */}
                        <Bar dataKey="gender.length" fill="blue" />
                        <Bar dataKey="course.length" fill="red" />  
                        
                    </BarChart>
                    </section>
                </div>
                <div className='col-md-6'>
                    <div className='bg-dark'>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mygraphpage