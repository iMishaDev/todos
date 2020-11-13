import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { hoursLeft } from '../../util/helpers';
import { isEmpty } from 'lodash';
import Todo from '../Todo/Todo'
import CreateTodo from '../CreateTodo/CreateTodo';

const Todos = (props) => {
    const { initialList } = props;
    const [todosList, setTodosList] = useState(initialList);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const timeLeft = hoursLeft();

    const isAccomplished = (title) => {
        const newTodosList = todosList.map((todo) => {
            if (todo.title === title) 
                todo.accomplished = true;
            return todo
        })
        setTodosList(newTodosList)
    }
    const listIsDone = () => {
        const list = todosList.find((todo) => todo.accomplished !== true)
        return isEmpty(list);
    }

     const isDeleting = (title) => {
        const newTodosList = todosList.filter((todo) => todo.title !== title)
        setTodosList(newTodosList)
    }

    const handleSubmission = (todo) => {
        todosList.push(todo)
        setShow(false)
    }
  

    const todoList = (todos) => {
       return todos.map((todo, index) => (
            <Todo todoItem={todo} key={index} isDeleting={isDeleting} isAccomplished={isAccomplished} />
        ));
       }
 
 

return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="todo-container">
                <h1> My Todo App &#9997; </h1>

            </div>
            <CreateTodo handleClose={handleClose} show={show}  handleSubmission={handleSubmission} />
        <div className="card">
                <div className="card-header justify-content-between d-flex">
                    Today
                <Button  onClick={handleShow}> add Todo</Button>
                </div>
                <div className="card-body">
                      <ListGroup defaultActiveKey="#link1">
                        {todoList(todosList)}
                     </ListGroup>
                </div>
                <div className="card-footer">
                    { listIsDone() && <p> Pravo! You've accomplished your today's goals! &#x1F929; </p> }
                    { !listIsDone() && <p> Yay! You have {timeLeft} hours to accomplish your todos  &#128540;. check your <a href="/history">History </a></p>}
                </div>
            </div>
      </div>
    
     
  );
};

export default Todos;
