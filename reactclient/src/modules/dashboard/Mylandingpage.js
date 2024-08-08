import React from 'react'
import Mynavbar from '../../shares/Mynavbar'
import Mysidebar from '../../shares/Mysidebar'
import Myfooter from '../../shares/Myfooter'
import { Outlet } from 'react-router-dom'

function Mylandingpage() {
  return (
    <div className='container-fluid'>
        <div className='row fixed-top'>
            <div className='col-12'>
            <Mynavbar/>
            </div>
        </div>
        <div className='row m-page'>
            <div className='col-md-2 border'>
                <Mysidebar/>
            </div>
            <div className='col-md-10 border'>
                <div className='border page'>
                    <Outlet/>
                </div>

            <Myfooter/>
            </div>
            
        </div>

        
    </div>

  )
}

export default Mylandingpage