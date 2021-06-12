import React from 'react';
import { Redirect,Link } from "react-router-dom";
import styled from "styled-components";
import {register} from "../actions/auth";
import { connect } from 'react-redux';

class Register extends React.Component{
constructor(props){
  super(props);
  this.state = {
      firstName:'',
      lastName:'',
      userName:'',
      password:'',
      confirmPassword:'',
      errors:{},
      isRegistered:''

  };
  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
 
 

 handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("name..", name);
    console.log("value", value);
    this.setState((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

validateRegister = () =>{
  const {firstName,lastName,userName,emailId,password,confirmPassword} = this.state;
  let isValid = true;
  const errors = {};
  if(firstName.trim().length < 3){
    errors.firstName = "First name is mandatory";
     isValid = false;
  }
  if(lastName.trim().length < 3){
    errors.lastName = "Last name is mandatory";
     isValid = false;
  }
  if(userName.trim().length < 6){
    errors.userName = "User name length should be 6 or above";
     isValid = false;
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailId)) {
    errors.emailId = "Invalid email address";
    isValid = false;
  }
  if(password.trim().length < 8){
    errors.password = "Password length should be 8 or above";
     isValid = false;
  }
  if(password !== confirmPassword){
    errors.password = "Password does not match";
    errors.confirmPassword = "Confirm password does not match";
     isValid = false;
  }
  this.setState({errors});
  return isValid;

}

handleSubmit = async (event) =>{
  event.preventDefault();
  
  const user = this.state;
  const isValid = this.validateRegister();
  console.log("isValid..",isValid);

  console.log("props....",this.props);
  this.props.register(user);
}
if (isValid) {
    debugger;
    return <Redirect to="/userProfile" />;
  }
render(){
  return (
    <RegBlock>
      <RegisterTitle>Register to LMS</RegisterTitle>
      <RegisterForm>
        <div className="formGroup">
          <Input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
          {this.state.errors.firstName && <p className="error">{this.state.errors.firstName}</p>}
        </div>
        <div className="formGroup">
          <Input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
          {this.state.errors.lastName && <p className="error">{this.state.errors.lastName}</p>}
        </div>
        <div className="formGroup">
          <Input
            type="text"
            name="userName"
            placeholder="Enter user name"
            value={this.state.userName}
            onChange={this.handleInputChange}
          />
          {this.state.errors.userName && <p className="error">{this.state.errors.userName}</p>}
        </div>
        <div className="formGroup">
          <Input
            type="email"
            name="emailId"
            placeholder="Enter your emailId"
            value={this.state.emailId}
            onChange={this.handleInputChange}
          />
          {this.state.errors.emailId && <p className="error">{this.state.errors.emailId}</p>}
        </div>
        <div className="formGroup">
          <Input
            type="password"
            name="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          {this.state.errors.password && <p className="error">{this.state.errors.password}</p>}
        </div>
        <div className="formGroup">
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Enter confirm password"
            value={this.state.confirmPassword}
            onChange={this.handleInputChange}
          />

          {this.state.errors.confirmPassword && <p className="error">{this.state.errors.confirmPassword}</p>}
        </div>
        <div className="buttonDiv">
          <Link to="/login">Login</Link>
          <Button type="button" onClick={this.handleSubmit}>Register</Button>
        </div>
         {Object.keys(this.state.errors).map((key)=>{
            return <div key={key}>{this.state.errors[key]}</div>
        })} 
      </RegisterForm>
    </RegBlock>
  )
}

}

const RegBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
`;
const RegisterForm = styled.form`
  padding: 20px 15px;
  width: 260px;
  height: auto;
  background-color: darkorange;
`;

const Input = styled.input`
  padding: 6px 4px;
  border-radius: 7px;
  border-color: white;
  width: 100%;
  font-size: 18px;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 8px 4px;
  width: 70px;
  cursor: pointer;
  text-align: center;
`;
const RegisterTitle = styled.h2`
  display: flex;
  justify-content: center;
`;

const mapDispatchToProps = (dispatch) => {
    return {
         register: (user) => dispatch(register(user))
        }
    }


export default connect(null, mapDispatchToProps)(Register);