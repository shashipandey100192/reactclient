import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../src/assets/global.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Myloginpage from './modules/auth/Myloginpage';
import Myregistorpage from './modules/auth/Myregistorpage';
import Mylandingpage from './modules/dashboard/Mylandingpage';
import Myhomepage from './modules/dashboard/Myhomepage';
import Profilepage from './modules/dashboard/Profilepage';
import Myeditreord from './modules/dashboard/Myeditreord';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Myloginpage />}></Route>
        <Route path='registor' element={<Myregistorpage/>}></Route>
        <Route path='dashboard' element={<Mylandingpage/>}>
          <Route path='' element={<Myhomepage/>}/>
          <Route path='view/:id' element={<Profilepage/>}/>
          <Route path='edit/:id' element={<Myeditreord/>}/>
        
        </Route>
      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);
