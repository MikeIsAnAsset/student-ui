import React, { Component } from 'react';

const studentList = (props) => {



return props.students.map((student, index) =>
    <div key={index} className="card" style={{ width: '18rem' }}>
        <div className="card-header">
            {student.firstName} {student.lastName}
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">{student.email}</li>
            <li className="list-group-item">{student.telephone}</li>
            <li className="list-group-item">{student.age}</li>
        </ul></div>


)
}
export default studentList;