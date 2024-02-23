import React, { useEffect, useState } from 'react'
import CardTodo from '../../components/CardTodo/CardTodo'
import { useParams } from 'react-router-dom'
import { getAllTodos, getTodoById } from '../../services/todo_service'

function DetailTodo() {

  const {todoId} = useParams()

  const [todo, setTodo] = useState({})

  useEffect(() => {

    const load = async () => {
      const result = await getTodoById(todoId)
      setTodo(result)
    }
    load()

  }, [todo])


  //Llamar al servicio para que copja un Todo by Id
    
  return (
    <>
    <h1>DetailTodo</h1>
    <CardTodo todo={todo}/>
    </>
  )
}

export default DetailTodo