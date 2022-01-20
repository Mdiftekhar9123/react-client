import React, { useState } from "react";
import Admin from "../user/role/Admin";
import User from "../user/role/User";
import Trainee from "../user/role/Trainee";

const Dashboard = () => {
    const [adminn , setAdmin] = useState('');
    const [users , setUser] = useState('');
    const [trainees , setTrainee] = useState('');
    return(
        <div>
          <h1 className = 'das'>Welcome to Dashboard page</h1>
          <button onClick = { () => {setAdmin('true'); setUser('false');setTrainee('false')}} >Admin</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick = { () => {setAdmin('false'); setUser('true');setTrainee('false')}} >User</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick = { () => {setAdmin('false'); setUser('false');setTrainee('true')}} >Trainee</button>
            
            {adminn === 'true' && <Admin/>}
            {users === 'true' && <User/>}
            {trainees === 'true' && <Trainee/>}
        </div>
    );
}

export default Dashboard;
