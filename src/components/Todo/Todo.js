import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { Check, Trash } from 'react-feather';
 

const Todo = (props) => {
    const { 
        todoItem, 
        isAccomplished,
        isDeleting,
        ...rest } = props;

    const { 
        title ,
        accomplished
    } = todoItem; 
    return (
        <ListGroup.Item {...rest} className={`d-flex justify-content-between align-items-center list-item  ${accomplished? 'is-accomplished':''}`}>
                {title}
                { !accomplished && (<div>
                <Button size="sm" className="mx-2 li-btn" variant="outline-success" onClick={()=>isAccomplished(title)}><Check /></Button>
                <Button size="sm" className="mx-2 li-btn" variant="outline-danger"  onClick={()=>isDeleting(title)}><Trash /></Button>
            </div>
        )}
            </ListGroup.Item>
    
);
};

export default Todo;
