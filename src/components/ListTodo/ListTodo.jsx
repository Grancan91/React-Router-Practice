import { getAllTodos } from '../../services/todo_service'
import { getAdapter } from 'axios'
import CardTodo from '../CardTodo/CardTodo'
import './ListTodo.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function ListTodo() {
    
    const [arrTodos, setArrTodos] = useState([])

    useEffect(() => {

        const load = async () => {
            const data = await getAllTodos()
            setArrTodos(data)
        }     
        load()   

    }, [arrTodos])
    
    function loadTodos(){
        const result = arrTodos.map((todoElement) => {
            return (
            <Link key={todoElement.id} to={`/todo/${todoElement.id}`}>
            <CardTodo key={todoElement.id} todo={todoElement}/>
            </Link>
            ) 
        
            
        })
        return result
    }


  return (

    <>
    {loadTodos()}
    </>
  )
}

export default ListTodo