import React, { Component } from 'react';
import Header from '../Header/Header';
import { Route } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import SignUp from '../SignUp/SignUp';
import Home from '../Home/Home';

class Layout extends Component {

    state = {
        loggedInUser: null
    }

    // This function is used to update the root component's state by adding the logged in user to the layout component
    setLoggedInUser = (user) => {
        this.setState({
            loggedInUser: user
        })
    }

    render() {
        let routes = (

            <React.Fragment>
                <Route exact path="/about-us" component={AboutUs} />
                <Route exact path="/" component={SignUp} />
                <Route exact path="/sign-up" component={SignUp} />
            </React.Fragment>

        )
        if (this.state.loggedInUser) {
            routes = (
                <React.Fragment>
                    <Route exact path="/about-us" component={AboutUs} />
                    <Route exact path="/" component={Home} />
                    {/* <Route exact path="/settings" component={Settings} /> */}
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>

                <Header loggedInUser={this.state.loggedInUser} setLoggedInUser={this.setLoggedInUser}></Header>
                {routes}
            </React.Fragment>
        );
    }


}

export default Layout;