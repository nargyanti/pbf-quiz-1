import React, { Component } from 'react';
import "./StudentList.css"
import List from "../../components/StudentList/List.jsx"

class StudentList extends Component {
    state = {
        students: [],
        insertStudent: {
            id: 5,
            nim: "",
            name: "",
            phone: "",
            year: "",
            study_program: "",
            status: ""
        }
    }

    fetchDataFromAPIServer = () => {
        const apiUrl = 'http://localhost:3001/students';

        fetch(apiUrl)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    students: result
                })
            })
    }

    componentDidMount() {
        this.fetchDataFromAPIServer();
    }

    handleDeleteStudentList = (id) => {
        const apiUrl = "http://localhost:3001/students/${id}";

        fetch(apiUrl, { method: "DELETE" })
            .then(response => {
                this.fetchDataFromAPIServer();
            }
            )
    }

    handleInsertStudentList = (event) => {
        let formInsertStudent = { ...this.state.insertStudent };
        let timestamp = new Date().getTime()
        formInsertStudent["id"] = timestamp
        formInsertStudent[event.target.name] = event.target.value;
        this.setState({
            insertStudent: formInsertStudent,
        })
    }

    handleSaveButton = () => {
        fetch("http://localhost:3001/students", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }, body: JSON.stringify(this.state.insertStudent),
        })
            .then((Response) => {
                this.fetchDataFromAPIServer();
            });
    };

    render() {
        return (
            <div>
                <div className='form my-3'>
                    <h2>Input Students</h2>
                    <input type="text" className='form-control my-2' id='nim' name="nim" placeholder='NIM' onChange={this.handleInsertArticle} />
                    <input type="text" className='form-control my-2' id='name' name="name" placeholder='Name' onChange={this.handleInsertArticle} />
                    <input type="text" className='form-control my-2' id='phone' name="phone" placeholder='Phone' onChange={this.handleInsertArticle} />
                    <input type="text" className='form-control my-2' id='year' name="year" placeholder='Year' onChange={this.handleInsertArticle} />
                    <input type="text" className='form-control my-2' id='study_program' name="study_program" placeholder='Study program' onChange={this.handleInsertArticle} />
                    <input type="text" className='form-control my-2' id='status' name="status" placeholder='Status' onChange={this.handleInsertArticle} />
                    <button type="submit" className="btn btn-primary" onClick={this.handleSaveButton}>Save</button>
                </div>
                <table className="table container">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Year</th>
                            <th>Study Program</th>
                            <th>Status</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(student => {
                                return <List key={student.id} id={student.id} nim={student.number} name={student.name} phone={student.phone} year={student.year} study_program={student.study_program} status={student.status} deleteStudent={this.handleDeleteStudentList} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
// }

export default StudentList;