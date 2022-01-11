import React from "react";
import './Login.css';
import  { useState} from 'react';
import { Button, TextField ,Form, FormLayout } from "@shopify/polaris";

/*
  //  # Using class component Login page.

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  emailValidation = () => {
    const REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.email.match(REGEX)) {
      return true;
    }
    else {
      return false;
    }
  }
  passwordValidation = () => {
    const REGEX = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$";
    if(this.password.match(REGEX)) {
      return true;
    }
    else {
      return false;
    }
  }
   onSubmit = (event) => {
    const emal = this.emailValidation();
    const pass = this.passwordValidation();
    if(!emal) {
      alert('Email is not Valid and not proper format')
    }
    else if(!pass) {
      alert('Password is not Valid because minumum six inputs are allowed. ')
    }
    else {
    this.setState({email:"",password:""});
    window.alert("email: "+ this.state.email + "  password: " + this.state.password)
    event.preventDefault();
    }
   }
  render(){
    return(
      <div className = 'form'>
      <div className = 'formLayout'>
     <h1 className = 'heading'> Welcome to My login Page  </h1>
     <Form onSubmit = {this.onSubmit}>
       <FormLayout>
       <div className = 'Textfield'>
         <TextField label="Email" autoComplete="off" name = "email" type="email" 
          placeholder = "UserEmail"
          value = {this.state.email}
          onChange = {(newValue) => this.setState({email:newValue})} /><br/>
          <TextField label="Password" autoComplete="off" name = "password" type="password" 
          placeholder = "Password"
          value = {this.state.password}
          onChange = {(newValue) => this.setState({password:newValue})} />
       </div> 
       <div className = 'button'>
        <Button submit>Login</Button>
       </div> 
     </FormLayout>
    </Form> 
    </div>
    </div>
    );
  }
} 
*/


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const emailValidation = () => {
      const REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(email === "") {
        setEmailError("email is required")
      }
      else if(email.match(REGEX)){
        setEmailError("")
      }
      else {
        setEmailError("please Enter valid Email")
      }
    }

   const passwordErrorValidation = () => {
     if(password === ""){
       setPasswordError('Password is required')
     }
     else {
       setPasswordError("")
     }
   } 
  const passwordValidation = () => {
      const REGEX = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$";
      if(password.match(REGEX)) {
        return true;
      } 
      else {
        return false;
      }
    
    }
    const onSubmit = () => {
      const password = passwordValidation();
      if(emailError !== "") {
        alert('Email is not Valid and not proper format read the instruction carefully.')
      }
      else if(!password) {
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
    <div className = 'formLayout'>
    <h1 className = 'heading'> Welcome to My login Page  </h1>
    <Form onSubmit = {onSubmit}>
      <FormLayout >
      
      <div className = 'Textfield'>
          <TextField label="Email" autoComplete="off" name = "email" type="email" 
          placeholder = "UserEmail"
          value={email} 
          onChange ={ (value) => setEmail(value)} onBlur = {emailValidation}/><br/>
          <span className = "err">{emailError}</span>         
          <TextField label="Password" autoComplete="off" name = "password" type="password" 
          placeholder = "Password"
          value={password} 
          onChange ={ (value) => setPassword(value)} onBlur = {passwordErrorValidation}/>
          <span className = "err">{passwordError}</span>
       </div> 
       <div className = 'button'>
        <Button submit>Login</Button>
       </div> 
       
     </FormLayout>
    </Form> 
    </div>
    </div>
    );
}

export default Login;
