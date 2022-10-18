import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

const Home = () => {
    const [todos,setTodos] = useState()
  
    const url = "https://634e52d94af5fdff3a589e1a.mockapi.io/api/todos/"
  //+ read işlemi için
  const getTodos = async () => {
    // const response = await axios.get(url)
    // const {data} = response
    // console.log(response.data)
    // console.log(data)

    const {data} = await axios.get(url)
    console.log(data)
    setTodos(data)
  }
 //& create işlemi için
  const postTodo = async (item) => {
      await axios.post(url,item)
    //   setTodos([...todos,item])
    getTodos()
  }

  //? delete işlemi için
  const deleteTodo = async (id) =>{
    await axios.delete(`${url}${id}`)
    getTodos()
  }
  useEffect(()=>{
    getTodos()
  },[])

  return (
    <Container className="mt-4">
        <AddTodo postTodo={postTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
    </Container>
  )
}

export default Home
