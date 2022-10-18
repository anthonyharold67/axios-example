import Table from 'react-bootstrap/Table';

function TodoList({todos,deleteTodo}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Todo</th>
          <th>Is Done ? </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
            todos?.map((item,index)=>{
             return(  
             <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.todo}</td>
                <td>{item.isDone ? "✔" : "❌"}</td>
                <td role={"button"} onClick={()=>deleteTodo(item.id)}>🗑</td>
              </tr>
              ) 
            })
        }
        
      </tbody>
    </Table>
  );
}

export default TodoList;