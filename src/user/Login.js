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

    const emailValidation = () => {
      let REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(email.match(REGEX)){
          return true;
      }
      return false;
  }
   
  const passwordValidation = () => {
      let REGEX = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$";
      if(password.match(REGEX)) {
        return true;
      } 
      else {
        return false;
      }
    }

    const onSubmit = () => {
      let emal = emailValidation();
      let pass = passwordValidation();
      if(!emal) {
        alert('Email is not Valid and not proper format')
      }
      else if(!pass) {
        alert('Password is not Valid because minumum six inputs are allowed. ')
      }
      else {
        window.alert("email:"+ email + "  password: " + password);
        setEmail('');
        setPassword('');
        } 
    }
    return(
    <div className = 'form'>
    <h1 className = 'heading'> Welcome to My login Page  </h1>
    <Form onSubmit = {onSubmit}>
      <FormLayout>
      <div className = 'Textfield'>
          <TextField label="Email" autoComplete="off" name = "email" type="email" 
          placeholder = "UserEmail"
          value={email} 
          onChange ={ (value) => setEmail(value)} /><br/>
          <TextField label="Password" autoComplete="off" name = "password" type="password" 
          placeholder = "Password"
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
