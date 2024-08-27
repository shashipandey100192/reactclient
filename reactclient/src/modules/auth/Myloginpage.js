import React  , {useState} from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { TbPasswordFingerprint } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { backendurl } from '../../Servicepage';

import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from '../reduxpage/Myactions';



function Myloginpage() {
    const count = useSelector((state) => state.counter.value);
    const dispatch10  = useDispatch();



    const usenav = useNavigate();


    const [userlogin, usersetlogin] = useState({
        email: "",
        pass: ""
    });


    const updateinput = (e) => {
        const { name, value } = e.target;
        // console.log(e);
        usersetlogin((a) => {
            return {
                ...a,
                [name]: value
            }
        })
    }


    const mylogin = async()=>{

        const { email, pass } = userlogin;  
        if(email==="" || pass==="")
        {
            alert("email and  password is blank");
        }
        else
        {

        const mydata = await fetch(`${backendurl}/mylogin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,pass
            })
        });
        const res = await mydata.json();
            console.log(res);
            if(res.status===422)
            {
                alert("welcome to login page");
                usenav('/dashboard');

            }
            else
            {
                alert("can't login page");
            }
    }
    }







  return (
    <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-sm-5 p-3'>
                    <div className='container-fluid border p-5 bg-light shadow'>
                        <div className='row'>
                            <div className='col-12 p-2 mt-2'>
                                <label className="form-label"> <HiOutlineMail /> Email address</label>
                                <input type='text' className='form-control' placeholder='email id' name='email' onChange={updateinput}/>
                            </div>
                            <div className='col-12 p-2 mt-2'>
                                <label className="form-label"> <TbPasswordFingerprint /> Password</label>
                                <input type='password' className='form-control' placeholder='password' name='pass' onChange={updateinput}/>
                            </div>
                            <div className='col-12 p-2 mt-2 text-center'>
                                <input type='button' value="submit" className='btn btn-success' onClick={mylogin}/>
                                <input type='reset' value="cancel" className='btn btn-danger ms-3' />
                                <Link to="registor">New Registor</Link>
                                <Link to="dashboard" className='btn'>dashboard</Link>
                                {count}
                                <button type='button' onClick={()=>dispatch10(increment())}>incre</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Myloginpage