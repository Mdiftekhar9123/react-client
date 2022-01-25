import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from "../user/Login";
import Dashboard from "../dashboard/Dashboard";
import Error from "../Error";
import Admin from "../user/role/Admin";
import Trainee from "../user/role/Trainee";
import User from "../user/role/User";
import TopBarHeader from "../header/Header";

const Routess = () => {
    return (
        <BrowserRouter>
            <TopBarHeader />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/Admin" element={<Admin />} />
                <Route path="/Trainee" element={<Trainee />} />
                <Route path="/User" element={<User />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Routess;
