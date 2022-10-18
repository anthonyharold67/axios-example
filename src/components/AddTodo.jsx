import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function AddTodo({postTodo}) {
  const [inputVal,setInputVal] = useState("")  

  const handleClick = ()=>{
    if(inputVal){
        const todo = {
            "todo":inputVal,
            "isDone": false
        }
        postTodo(todo)
        setInputVal("")
    }
  }

  return (
    <Row>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Add todo..."
          aria-label="Add todo..."
          aria-describedby="basic-addon2"
          value={inputVal}
          onChange={(e)=>setInputVal(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleClick}>
          Add Todo
        </Button>
      </InputGroup>
    </Row>
  );
}

export default AddTodo;