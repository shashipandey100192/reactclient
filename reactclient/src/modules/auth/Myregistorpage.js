import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { backendurl } from '../../Servicepage';


function Myregistorpage() {
    const appNavigate = useNavigate();


    const updateinput = (e) => {
        const { name, value } = e.target;
        setdata((a) => {
            return {
                ...a,
                [name]: value
            }
        })
    }



    const [insdata, setdata] = useState({
        fullname: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        profile: "",
        course: "",
        pass: ""
    });

    const registorpage = async () => {

        if (insdata.fullname.length>=5) {

            const { fullname, email, phone, dob, gender, profile, course, pass } = insdata;
            const mydata = await fetch(`${backendurl}/createdata`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullname, email, phone, dob, gender, profile, course, pass
                })
            })
            const res = await mydata.json();
            console.log(res);
            if (res.status === 255) {
                alert("data submit successfully");
                appNavigate("/");
            }
            else if(res.status===450)
            {
                alert("your full name not property fil");
            }
            else
            {
               alert("not fill"); 
            }

        }
        else {
            alert("form fill property");
        }


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
                                    <input type='text' className='form-control' placeholder='Full Name' name='fullname' onChange={updateinput} value={insdata.fullname} />
                                </div>
                                <div className='col-md-6 p-2 mt-2'>
                                    <label className="form-label">Email Id</label>
                                    <input type='email' className='form-control' placeholder='email' name='email' onChange={updateinput} />

                                </div>
                                <div className='col-md-6 p-2 mt-2'>
                                    <label className="form-label">Phone No</label>
                                    <input type='text' className='form-control' placeholder='phone' name='phone' onChange={updateinput} />
                                </div>
                                <div className='col-md-6 p-2 mt-2'>
                                    <label className="form-label">DOB</label>
                                    <input type='date' className='form-control' name='dob' onChange={updateinput} />
                                </div>
                                <div className='col-md-6 p-2 mt-2'>
                                    <label className="form-label">Gender</label><br />
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="male" onChange={updateinput} />
                                        <label className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="female" onChange={updateinput} />
                                        <label className="form-check-label">Female</label>
                                    </div>
                                </div>
                                <div className='col-md-6 p-2 mt-2'>
                                    <label className="form-label">Course</label>
                                    <select className='form-select' name='course' onChange={updateinput}>
                                        <option>Mern</option>
                                        <option>Mean</option>
                                        <option>java</option>
                                        <option>UI/UX</option>
                                    </select>
                                </div>
                                <div className='col-md-6 p-2 mt-2'>
                                    <label className="form-label">Profile Picture</label>
                                    <input type='text' className='form-control' placeholder='profile' name='profile' onChange={updateinput} />
                                </div>
                                <div className='col-md-6 p-2 mt-2'>
                                    <label className="form-label">Create Password</label>
                                    <input type='password' className='form-control' placeholder='pass' name='pass' onChange={updateinput} />
                                </div>

                                <div className='col-12 p-2 mt-2 text-center'>
                                    <input type='button' value="Registor Now" className='btn btn-success' onClick={registorpage} />
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