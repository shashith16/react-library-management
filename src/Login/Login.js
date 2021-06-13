import React from "react";
import { connect } from "react-redux";
import { Redirect,Link } from "react-router-dom";
import styled from "styled-components";
import {login} from "../actions/auth";

class Login extends React.Component {
  constructor(){
    super();
    this.state="";

    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    console.log("name..", name);
    console.log("value", value);
    this.setState(this.state.userName)
  };

  handleSubmitLogin = async (event) =>{
  event.preventDefault();
  this.props.login(this.state);
}
  render(){
      return (
    <Main>
      <LoginTitle>Login to LMS</LoginTitle>
      <LoginBlock>
        <div className="formGroup">
          <Input type="text" placeholder="Enter user name" name="userName" value={this.state.userName} onChange={this.handleInput}/>
        </div>
        <div className="formGroup">
          <Input type="password" placeholder="Enter password" name="password" value={this.state.password} onChange={this.handleInput}/>
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
         login: (authData) => dispatch(login(authData))
        }
    }

export default connect(null,mapDispatchToProps)(Login);
