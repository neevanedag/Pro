import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import TextField from 'material-ui/TextField';
class Login extends Component {
constructor(props){
super(props);
this.state={
username:'',
password:''
}
}
render() {
return (
  <div>
	<MuiThemeProvider>
	  <div>
	  <AppBar
		 title="Login"
	   />
	   <TextField type="email"
		 placeholder="Enter your Username"
		 floatingLabelText="Username" required="true" value={this.state.email}
		 onChange = {(event,newValue) => this.setState({email:newValue})}
		 />
	   <br/>
		 <TextField
		   type="password"
		   hintText="Enter your Password"
		   floatingLabelText="Password" required="true"
		   onChange = {(event,newValue) => this.setState({password:newValue})}
		   />
		 <br/>
		 <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
	 </div>
	 </MuiThemeProvider>
  </div>
);
}
handleClick(event){
var apiBaseUrl = "http://localhost:3000/api/";
var self = this;
var email;
var payload={
"email":this.state.email,
"password":this.state.password
}


function validate(email, password) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length == 0,
    password: password.length == 0,
  };
}
const errors = validate(this.state.email, this.state.password);
console.log("Login successfull");
axios.post(apiBaseUrl+'login', payload)
.then(function (response) {
console.log(response);
if(response.data.code === 200){
console.log("Login successfull");
var uploadScreen=[];
// uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
// self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
}
else if(response.data.code === 204){
console.log("Username password do not match");
alert("username password do not match")
}
else{
console.log("Username does not exists");
alert("Username does not exist");
}
})
.catch(function (error) {
console.log(error);
});
}
}
const style = {
margin: 15,
};
export default Login;
