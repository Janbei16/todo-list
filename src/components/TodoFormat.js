import React from "react";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import TodoList from "./TodoList";


function TodoFormat(){
    return(
        <di>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="add Todo"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Button
                </Button>
            </InputGroup>
        <TodoList/>
        </di>
    )
}
export default TodoFormat;