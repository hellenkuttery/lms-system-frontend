import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './../pages/Login';
import Register from '../pages/Register';

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Login/>}/>
                <Route path="/register" element= {<Register/>} />

            </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default AppRouter