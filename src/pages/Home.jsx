import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import loadingGif from "../assets/loading.gif"

const Home = () => {
    const [todos,setTodos] = useState()
    const [loading,setLoading]=useState(true)
  
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
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])

  return (
    <div className="justify-content-center mx-auto">
    {
      loading ? (<Image src={loadingGif} className=" d-flex justify-content-center mt-3 mx-auto" />) : 
      (
        <Container className="mt-4">
        <AddTodo postTodo={postTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
    </Container>
      )
    }
    </div>
  )
}

export default Home
