import React from "react";
import './Login.css';
import  { useState} from 'react';
import { Button, TextField ,Form, FormLayout } from "@shopify/polaris";

/*
   # Using class component Login page.

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
   onSubmit = (event) => {
    this.setState({email:"",password:""});
    window.alert("email: "+ this.state.email + "  password: " + this.state.password)
    event.preventDefault();
   }
  render(){
    return(
      <div className = 'form'>
     <h1 className = 'heading'> Welcome to My login Page  </h1>
     <Form onSubmit = {this.onSubmit}>
       <FormLayout>
       <div className = 'Textfield'>
         <TextField label="Email" autoComplete="off" name = "email" type="email" 
         value = {this.state.email}
          onChange = {(newValue) => this.setState({email:newValue})} /><br/>
          <TextField label="Password" autoComplete="off" name = "password" type="password" 
          value = {this.state.password}
          onChange = {(newValue) => this.setState({password:newValue})} />
       </div> 
       <div className = 'button'>
        <Button submit>Login</Button>
       </div> 
     </FormLayout>
    </Form> 
    </div>
    );
  }
} 
*/


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
      window.alert("email: "+ email + "  password: " + password)
      setEmail('');
      setPassword('');
    }
    return(
    <div className = 'form'>
    <h1 className = 'heading'> Welcome to My login Page  </h1>
    <Form onSubmit = {onSubmit}>
      <FormLayout>
      <div className = 'Textfield'>
          <TextField label="Email" autoComplete="off" name = "email" type="email" 
          value={email} 
          onChange ={ (value) => setEmail(value)} /><br/>
          <TextField label="Password" autoComplete="off" name = "password" type="password" 
          value={password} 
          onChange ={ (value) => setPassword(value)} />
       </div> 
       <div className = 'button'>
        <Button submit>Login</Button>
       </div> 
     </FormLayout>
    </Form> 
    </div>
    );
}
export default Login;
