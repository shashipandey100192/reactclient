import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Createapi } from '../../Servicepage';


function Myregistorpage() {

const updateinput=(e)=>{
        const { name, value } = e.target;
        setdata((a) => {
          return {
            ...a,
            [name]: value
          }
        })
}



const [insdata,setdata]=useState({
    fullname:"",
    email:"",
    phone:"",
    dob:"",
    gender:"",
    profile:"",
    course:"",
});

const registorpage = async()=>{

    const {fullname } = insdata;
    const mydata = await fetch(`${Createapi}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            fullname
        })
      })
      const res = await mydata.json();
        console.log(res);
}
  



  return (
    <form>
    <div className='container'>
        <div className='row justify-content-md-center'>
            <div className='col-sm-8 p-3'>
                <div className='container-fluid border p-5 bg-light shadow'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h2>New User Registor Page</h2>
                        </div>
                        <div className='col-md-6 p-2 mt-2'>
                            <label className="form-label">Full Name</label>
                            <input type='text' className='form-control' placeholder='Full Name' name='fullname' onChange={updateinput} value={insdata.fullname}/>
                        </div>
                        <div className='col-md-6 p-2 mt-2'>
                            <label className="form-label">Email Id</label>
                            <input type='email' className='form-control' placeholder='email' name='email'/>

                        </div>
                        <div className='col-md-6 p-2 mt-2'>
                            <label className="form-label">Phone No</label>
                            <input type='text' className='form-control' placeholder='phone' name='phone'/>
                        </div>
                        <div className='col-md-6 p-2 mt-2'>
                            <label className="form-label">DOB</label>
                            <input type='date' className='form-control' name='dob'/>
                        </div>
                        <div className='col-md-6 p-2 mt-2'>
                            <label className="form-label">Gender</label><br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="male"/>
                                <label className="form-check-label">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="female"/>
                                <label className="form-check-label">Female</label>
                            </div>
                        </div>
                        <div className='col-md-6 p-2 mt-2'>
                            <label className="form-label">Course</label>
                            <select className='form-select' name='course'>
                                <option>Mern</option>
                                <option>Mean</option>
                                <option>java</option>
                                <option>UI/UX</option>
                            </select>
                        </div>
                        <div className='col-md-6 p-2 mt-2'>
                            <label className="form-label">Profile Picture</label>
                            <input type='text' className='form-control' placeholder='profile' name='profile'/>
                        </div>
                        <div className='col-md-6 p-2 mt-2'>
                            <label className="form-label">Create Password</label>
                            <input type='password' className='form-control' placeholder='pass' name='pass'/>
                        </div>

                        <div className='col-12 p-2 mt-2 text-center'>
                            <input type='button' value="Registor Now" className='btn btn-success' onClick={registorpage}/>
                            <input type='reset' value="cancel" className='btn btn-danger ms-3' />
                            <Link to="/">login page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
  )
}

export default Myregistorpage