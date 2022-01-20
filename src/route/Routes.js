import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Login from "../user/Login";
import Dashboard from "../dashboard/Dashboard";
import Error from "../Error";
const Routess = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/Erro" element = {<Error/>}/>
        </Routes>  
    </BrowserRouter>
    );
}
export default Routess;
