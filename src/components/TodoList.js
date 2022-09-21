import React from "react";
import {Table} from "react-bootstrap";

function TodoList(){

    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>

            </tr>
            </tbody>
        </Table>
    )
}
export default TodoList