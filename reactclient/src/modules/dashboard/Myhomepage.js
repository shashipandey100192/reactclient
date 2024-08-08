import React, { useEffect,useState } from 'react';
import axios from 'axios';


function Myhomepage() {
    const [mydata,setdata]=useState([])

    const myalldata = ()=>{
        axios.get('http://localhost:5782/allusers').then((d)=>{
            console.log(d.data);
            setdata(d.data)
        })
    }
    useEffect(()=>{
        myalldata();
    },[]);

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <div class="card text-bg-primary mb-3">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Total User: {mydata.length}</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Myhomepage