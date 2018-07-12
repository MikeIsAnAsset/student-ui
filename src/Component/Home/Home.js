import React, {Component} from 'react';
import axios from 'axios';
import StudentList from '../StudentList';

class Home extends Component {
    
    state = {
        students:[]
    }
    
    componentDidMount() {
        axios.get('http://localhost:8080/findAllStudents')
        .then(response =>{
            this.setState({
                studnets:response.data
            });
        })
    }
    
    render() {
        return (
            <StudentList students={this.state.students} />
        );
    }
}

export default Home;