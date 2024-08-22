import React,{useState,useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { backendurl } from '../../Servicepage';

function Myeditreord() {
    const  usenav = useNavigate();
    const {id} = useParams();
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

    const updateinput = (e) => {
        const { name, value } = e.target;
        setdata((a) => {
            return {
                ...a,
                [name]: value
            }
        })
    }

    const singleuser = () => {
        axios.get(`${backendurl}/singledata/${id}`).then((d) => {
            console.log(d.data);
            setdata(d.data);
        })
    }
    useEffect(() => {
        singleuser();
    }, []);


    const updaterecord = async () => {
            const { fullname, email, phone, dob, gender, profile, course, pass } = insdata;
            const mydata = await fetch(`${backendurl}/updaterecord/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullname, email, phone, dob, gender, profile, course, pass
                })
            })
            const res = await mydata.json();
            console.log(res);
            usenav("/dashboard");

           

    }



  return (
    <form>
    <div className='container'>
        <div className='row justify-content-md-center'>
            <div className='col-sm-8 p-3'>
                <div className='container-fluid border p-5 bg-light shadow'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h2>Edit User Details</h2>
                        </div>
                        <div className='col-md-6 p-2 mt-2'>
                            <label className="form-label">Full Name</label>
                            <input type='text' className='form-control' placeholder='Full Name' name='fullname' onChange={updateinput} value={insdata.fullname} />
                        </div>
                        <div className='col-md-6 p-2 mt-2'>
                            <label className="form-label">Email Id</label>
                            <input type='email' className='form-control' placeholder='email' name='email' onChange={updateinput} value={insdata.email}/>

                        </div>
                        <div className='col-md-6 p-2 mt-2'>
                            <label className="form-label">Phone No</label>
                            <input type='text' className='form-control' placeholder='phone' name='phone' onChange={updateinput}  disabled value={insdata.phone}/>
                        </div>
                        <div className='col-md-6 p-2 mt-2'>
                            <label className="form-label">DOB</label>
                            <input type='date' className='form-control' name='dob' onChange={updateinput} value={insdata.dob}/>
                        </div>
                        <div className='col-md-6 p-2 mt-2'>
                            <label className="form-label">Gender</label><br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="male" onChange={updateinput} checked={insdata.gender==="male" ? true : false} />
                                <label className="form-check-label">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="female" onChange={updateinput} checked={insdata.gender==="female" ? true : false}/>
                                <label className="form-check-label">Female</label>
                            </div>
                        </div>
                        <div className='col-md-6 p-2 mt-2'>
                            <label className="form-label">Course</label>
                            <select className='form-select' name='course' onChange={updateinput} value={insdata.course}>
                                <option>Mern</option>
                                <option>Mean</option>
                                <option>java</option>
                                <option>UI/UX</option>
                            </select>
                        </div>
                        <div className='col-md-6 p-2 mt-2'>
                            <label className="form-label">Profile Picture</label>
                            <input type='text' className='form-control' placeholder='profile' name='profile' onChange={updateinput}  value={insdata.profile}/>
                        </div>
                        <div className='col-md-6 p-2 mt-2'>
                            <label className="form-label">Create Password</label>
                            <input type='password' className='form-control' placeholder='pass' name='pass' onChange={updateinput} value={insdata.pass}/>
                        </div>

                        <div className='col-12 p-2 mt-2 text-center'>
                            <input type='button' value="Update record" className='btn btn-success' onClick={updaterecord}/>
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

export default Myeditreord