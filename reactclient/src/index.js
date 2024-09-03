import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import 'react-toastify/dist/ReactToastify.css';
import "../src/assets/global.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Myloginpage from './modules/auth/Myloginpage';
import Myregistorpage from './modules/auth/Myregistorpage';
import Mylandingpage from './modules/dashboard/Mylandingpage';
import Myhomepage from './modules/dashboard/Myhomepage';
import Profilepage from './modules/dashboard/Profilepage';
import Myeditreord from './modules/dashboard/Myeditreord';
import { Mystoredata } from './modules/reduxpage/Mystore';
import { Provider } from 'react-redux'
import Mytexteditors from './modules/dashboard/components/Mytexteditors';
import MygraphPage from './modules/dashboard/components/Mygraphpage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Mystoredata}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Myloginpage />}></Route>
        <Route path='registor' element={<Myregistorpage/>}></Route>
        <Route path='dashboard' element={<Mylandingpage/>}>
          <Route path='' element={<Myhomepage/>}/>
          <Route path='view/:id' element={<Profilepage/>}/>
          <Route path='edit/:id' element={<Myeditreord/>}/>
          <Route path='myeditor' element={<Mytexteditors/>}/>
          <Route path='mygrap' element={<MygraphPage/>}/>
        
        </Route>
      </Routes>

    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
