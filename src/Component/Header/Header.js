import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class Header extends Component {

    state = {
        email: '',
        password: ''
    }

    signInSubmitHandler = (event) => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:8080/login', user)
            .then(response => {
                const loggedInUserFromBackEndSystem = response.data;
                this.props.setLoggedInUser(loggedInUserFromBackEndSystem);
            }).catch(error => {
                // add logic for displaying user name or password is invalid
            })
    }


    signInChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        })
    }



    render() {

        let links = null;
        let searchBarOrSignInField = null;
        if (this.props.loggedInUser) {
            searchBarOrSignInField = (
                < form className="form-inline mt-2 mt-md-0" >
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form >
            )
            links = (
                <React.Fragment classNamenp="navbar transparent navbar-inverse">
                    <li className="nav-item active" className="navbar-inner">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about-us">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/settings">Settings</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sign-out">Sign Out</Link>
                    </li>
                </React.Fragment>
            )
        } else {
            searchBarOrSignInField = (
                <form onSubmit={this.signInSubmitHandler} className="form-inline mt-2 mt-md-0">
                    <input onChange={this.signInChangeHandler} value={this.state.email} name="email" className="form-control mr-sm-2" type="text" placeholder="email" />
                    <input onChange={this.signInChangeHandler} value={this.state.password} name="password" className="form-control mr-sm-2" type="password" placeholder="password" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
                </form>
            );
            links = (
                <React.Fragment>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about-us">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sign-up">Sign Up</Link>
                    </li>
                </React.Fragment>
            );
        }

        return (
            <div>

                <div className="jumbotron" id="FixMyJumbo" >
                    <div className="container" id="FixMyJumbo" >
                        <h1 className="display-3">This is about us!</h1>
                        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
                    </div>
                </div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#">Student Portal</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            {links}
                         
                        </ul>
                        {searchBarOrSignInField}

                    </div>
                </nav >
            </div>
        );
    }

}

export default Header;