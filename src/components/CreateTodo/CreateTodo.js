import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const CreateTodo = (props) => {
        const { handleSubmission, handleClose, show } = props;
        
        const [todo, setTodo] = useState({});
        const onInput = (e) => {
                setTodo({ title: e.target.value, accomplished: false})
        }
        return (<Modal
                    show={show}
                    onHide={handleClose}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>New Todo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Enter a todo" onChange={onInput}/>
                        </Form.Group>
                        <Button variant="primary" onClick={(e) => { e.preventDefault(); handleSubmission(todo)}} type="submit">
                            Add
                        </Button>
                        </Form>
                    </Modal.Body>
                </Modal>)
}

export default CreateTodo;