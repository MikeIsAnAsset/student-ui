import React, { Component } from 'react';
import axios from 'axios'; 
import Header from '../Header/Header';
import AboutUs from '../AboutUs/AboutUs';

class SignUp extends Component {

  state = {
    firstName: '',
    lastName: '',
    age: '',
    telephone: '',
    email: '',
    password: ''
  }

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  signUpSubmitHandler = (event) => {
    event.preventDefault();  // hides the query stirng from being displayed on the browser
    const student = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      email: this.state.email,
      password: this.state.password,
      telephone: this.state.telephone
    }
  

  axios.post('http://localhost:8080/submitStudentDetails', student)
    .then(response =>{
      console.log("user was created")
    }).catch(error =>{
      console.log("this was an error");
    })
  }

  render() {
    return (
      <div>

        <form onSubmit={this.signUpSubmitHandler} class="container" >
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputFirstName">Email</label>
              <input onChange={this.changeHandler} name="firstName" value={this.state.firstName} type="text" className="form-control" id="inputFirstName" placeholder="First Name" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputLastName">Email</label>
              <input onChange={this.changeHandler} name="lastName" value={this.state.lastName} type="text" className="form-control" id="inputLastName" placeholder="Last Name" />
            </div>
            <div className="form-group col-md-6">
              <label for="age">Age</label>
              <input onChange={this.changeHandler} name="age" value={this.state.age} type="text" type="text" className="form-control" id="age" placeholder="Age" />
            </div>
            <div className="form-group col-md-6">
              <label for="telephone">Telephone</label>
              <input onChange={this.changeHandler} name="telephone" value={this.state.telephone} type="text" className="form-control" id="telephone" placeholder="Telephone" />
            </div>
            <div className="form-group col-md-6">
              <label for="email">Email</label>
              <input onChange={this.changeHandler} name="email" value={this.state.email} type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input onChange={this.changeHandler} name="password" value={this.state.password} type="password" className="form-control" id="inputPassword4" placeholder="Password" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
    );
  }


}
export default SignUp;











