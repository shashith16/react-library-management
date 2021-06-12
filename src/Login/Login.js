import React from "react";
import { connect } from "react-redux";
import { Redirect,Link } from "react-router-dom";
import styled from "styled-components";
import {login} from "../actions/auth";

class Login extends React.Component {
  constructor(){
    super();
    this.state={
        emailId:'',
        password:''
    }

    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  }

  handleSubmitLogin = async (event) =>{
  event.preventDefault();
  
  const loginUser = this.state;

  console.log("props....",this.props);
  this.props.login(loginUser);
}
  render(){
      return (
    <Main>
      <LoginTitle>Login to LMS</LoginTitle>
      <LoginBlock>
        <div className="formGroup">
          <Input type="text" placeholder="Enter user name" name="userName" value={this.state.emailId}/>
        </div>
        <div className="formGroup">
          <Input type="password" placeholder="Enter password" name="password" value={this.state.password}/>
        </div>
        <div className="buttonDiv">
          <Link to="/register">Register</Link>
          <Button onClick={this.handleSubmitLogin}>Login</Button>
        </div>
      </LoginBlock>
    </Main>
  );
  }
  
}

const LoginBlock = styled.form`
  background-color: darkorange;
  height: 250px;
  width: 240px;
  border-radius: 4px;
  padding: 20px 15px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px 4px;
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

const LoginTitle = styled.h2`
  display: flex;
  justify-content: center;
`;

const mapDispatchToProps = (dispatch) => {
    return {
         login: (user) => dispatch(login(user))
        }
    }

export default connect(null,mapDispatchToProps)(Login);
