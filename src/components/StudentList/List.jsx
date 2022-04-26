import React from "react";

// Component using Function
const List = (props) => {
    return (
        <tr key={props.id}>
            <td>{props.nim}</td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.year}</td>
            <td>{props.study_program}</td>
            <td>{props.status}</td>        
            <td>
                <form action="#" method="POST">
                    <a className="btn btn-primary m-1" href="#">Show</a>
                    <a className="btn btn-warning m-1" href="#">Edit</a>
                    <button className="btn btn-danger m-1" onClick={() => props.deleteStudent(props.id)}>Delete</button>
                </form>
            </td>
        </tr>
    );
};
export default List;